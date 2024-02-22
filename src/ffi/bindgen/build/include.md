# Include

- `include!(concat!(env!("OUT_DIR"), "/bindings.rs"));`

## Examples

```rust,ignore
#![allow(non_upper_case_globals)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]

include!(concat!(env!("OUT_DIR"), "/bindings.rs"));
```

## References

- [`include!`](https://doc.rust-lang.org/std/macro.include.html)
- [`concat!`](https://doc.rust-lang.org/std/macro.concat.html)
- [`env!`](https://doc.rust-lang.org/std/macro.env.html)
- [`OUT_DIR`](https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-build-scripts)
- [There is no cross-platform way to use include\_\*!](https://github.com/rust-lang/rust/issues/75075)
