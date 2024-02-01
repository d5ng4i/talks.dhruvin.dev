# Functions

- Patterns in parameters are disallowed
- Must not have body

## Examples

```rust,editable
use std::ffi::*;

extern "C" {
    /// writes the string s and a trailing newline to stdout
    fn puts(s: *const c_char) -> c_int;
}

fn main() {
    let s = CString::new("Hello, RustBLR!").unwrap();
    assert!(unsafe { puts(s.as_ptr()) } >= 0);
}
```

## References

- [https://doc.rust-lang.org/reference/items/external-blocks.html#functions](https://doc.rust-lang.org/reference/items/external-blocks.html#functions)
- [https://doc.rust-lang.org/nomicon/ffi.html#calling-foreign-functions](https://doc.rust-lang.org/nomicon/ffi.html#calling-foreign-functions)
