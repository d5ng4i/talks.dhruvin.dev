# `core::error::Error`

```rust,ignore
pub trait Error: Debug + Display {
    // Provided methods
    fn source(&self) -> Option<&(dyn Error + 'static)> { ... }
}
```

```rust,ignore
impl dyn Error + 'static {
    pub fn is<T: Error + 'static>(&self) -> bool { ... }
    pub fn downcast_ref<T: Error + 'static>(&self) -> Option<&T> { ... }
    pub fn downcast_mut<T: Error + 'static>(&mut self) -> Option<&mut T> { ... }
}
```

- concise lowercase sentences without trailing punctuation
- `Error::source` when errors cross “abstraction boundaries”

## Examples

### `Error::source`

```rust,editable
use std::{error::Error, fmt};

#[derive(Debug)]
struct SuperError {
    source: SuperErrorSideKick,
}

impl fmt::Display for SuperError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "SuperError is here!")
    }
}

impl Error for SuperError {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        Some(&self.source)
    }
}

#[derive(Debug)]
struct SuperErrorSideKick;

impl fmt::Display for SuperErrorSideKick {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "SuperErrorSideKick is here!")
    }
}

impl Error for SuperErrorSideKick {}

fn get_super_error() -> Result<(), SuperError> {
    Err(SuperError { source: SuperErrorSideKick })
}

fn main() {
    match get_super_error() {
        Err(e) => {
            println!("Error: {e}");
            println!("Caused by: {}", e.source().unwrap());
        }
        _ => println!("No error"),
    }
}
```

## References

- [trait:core::error::Error](https://doc.rust-lang.org/stable/core/error/trait.Error.html)
- [impl dyn Error + 'static](https://doc.rust-lang.org/stable/core/error/trait.Error.html#impl-dyn+Error)
