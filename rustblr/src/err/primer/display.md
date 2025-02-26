# `core::fmt::Display`

```rust,ignore
pub trait Display {
    // Required method
    fn fmt(&self, f: &mut Formatter<'_>) -> Result;
}
```

- format trait for `{}`
- user-facing output, cannot derive
- implements `ToString`, prefer `Display`
- internationalization, only one impl

## Examples

### `impl Display`

```rust,editable
use std::fmt;

struct Point {
    x: i32,
    y: i32,
}

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

let origin = Point { x: 0, y: 0 };

assert_eq!(format!("The origin is: {origin}"), "The origin is: (0, 0)");
````

## References

- [trait:core::fmt::Display](https://doc.rust-lang.org/stable/core/fmt/trait.Display.html)
- [trait:alloc::string::ToString](https://doc.rust-lang.org/stable/alloc/string/trait.ToString.html)
