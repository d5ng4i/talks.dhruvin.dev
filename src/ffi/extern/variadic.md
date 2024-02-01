# Variadic Functions

- Declared variadic by specifying `...` as the last argument

## Examples

```rust,editable
use std::ffi::*;

extern "C" {
    /// print formatted output
    fn printf(format: *const c_char, ...) -> c_int;
}

fn main() {
    let format = CString::new("Hello, %s!").unwrap();
    let arg = CString::new("RustBLR").unwrap();
    assert_eq!(unsafe { printf(format.as_ptr(), arg.as_ptr()) }, 15);
}
```

## Caveats

- Needs least one parameter before variadic parameter
- Normal Rust functions can not be variadic

## References

- [https://doc.rust-lang.org/stable/reference/items/external-blocks.html#variadic-functions](https://doc.rust-lang.org/stable/reference/items/external-blocks.html#variadic-functions)
- [https://doc.rust-lang.org/nomicon/ffi.html#variadic-functions](https://doc.rust-lang.org/nomicon/ffi.html#variadic-functions)
