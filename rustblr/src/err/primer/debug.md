# `core::fmt::Debug`

```rust,ignore
pub trait Debug {
    // Required method
    fn fmt(&self, f: &mut Formatter<'_>) -> Result;
}
```

- format trait for `{:?}` and `{:#?}`
- should format the output in a programmer-facing, debugging context
- prefer `#[derive(Debug)]` over `impl Debug`
- `{var:?}` prints inline, `{var:#?}` prints pretty

## Examples

### `#[derive(Debug)]`

```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

let origin = Point { x: 0, y: 0 };

assert_eq!(
    format!("The origin is: {origin:?}"),
    "The origin is: Point { x: 0, y: 0 }",
);

assert_eq!(format!("The origin is: {origin:#?}"), "The origin is: Point {
    x: 0,
    y: 0,
}");
```

### `impl Debug`

```rust
use std::fmt;

struct Point {
    x: i32,
    y: i32,
}

impl fmt::Debug for Point {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Point")
            .field("x", &self.x)
            .field("y", &self.y)
            .finish()
    }
}

let origin = Point { x: 0, y: 0 };

assert_eq!(
    format!("The origin is: {origin:?}"),
    "The origin is: Point { x: 0, y: 0 }",
);

assert_eq!(format!("The origin is: {origin:#?}"), "The origin is: Point {
    x: 0,
    y: 0,
}");
```

## Caveats

- unstable output
- infallible formatting
- fallible writing

## References

- [trait:core::fmt::Debug](https://doc.rust-lang.org/stable/core/fmt/trait.Debug.html)
- [derive:core::fmt::Debug](https://doc.rust-lang.org/stable/core/fmt/derive.Debug.html)
- [struct:core::fmt::Formatter](https://doc.rust-lang.org/stable/core/fmt/struct.Formatter.html)
- [fn:core::fmt::Formatter::debug](https://doc.rust-lang.org/stable/core/fmt/derive.Debug.html?search=fn%3Acore%3A%3Afmt%3A%3AFormatter%3A%3Adebug)
