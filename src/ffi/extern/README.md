# External Blocks

- Part of the Rust language
- Foundational to Rust's FFI story
- Provide declarations of items that are not defined in the current crate
  - functions
  - statics

## Examples

```rust,noplayground
//! SPDX-License-Identifier: Apache-2.0 or MIT
extern "C" {
    // functions and statics go here
}
```

## References

- [https://doc.rust-lang.org/reference/items/external-blocks.html#external-blocks](https://doc.rust-lang.org/reference/items/external-blocks.html#external-blocks)
- [https://doc.rust-lang.org/rust-by-example/std\_misc/ffi.html](https://doc.rust-lang.org/rust-by-example/std_misc/ffi.html)
