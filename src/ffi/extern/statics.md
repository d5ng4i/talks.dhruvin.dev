# Statics

- Declared without the initializer expression
- Both immutable and mutable access are `unsafe` as it may have uninitialized or invalid value

## Examples

```rust,editable
use std::ffi::*;

extern "C" {
    /// index of the next element to be processed in argv by getopt
    static optind: c_int;
}

fn main() {
    assert_eq!(unsafe { optind }, 1);
}
```

## Caveats

- An immutable static must be initialized before any Rust code is executed

## References

- [https://doc.rust-lang.org/reference/items/external-blocks.html#statics](https://doc.rust-lang.org/reference/items/external-blocks.html#statics)
- [https://doc.rust-lang.org/nomicon/ffi.html#accessing-foreign-globals](https://doc.rust-lang.org/nomicon/ffi.html#accessing-foreign-globals)
