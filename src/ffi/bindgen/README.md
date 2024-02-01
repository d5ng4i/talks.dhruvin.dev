# Bindgen

- Maintained by rust-lang
- De facto interface
- Partial support for C++ and Objective C
- Uses libclang internally

## Examples

```rust,noplayground
# extern crate bindgen;
# fn example() {
bindgen::builder()
    .header("wrapper.h")
    .generate()
    .expect("could not generate bindings");
# }
```

## References

- [https://rust-lang.github.io/rust-bindgen](https://rust-lang.github.io/rust-bindgen)
- [https://crates.io/crates/bindgen](https://crates.io/crates/bindgen)
- [https://docs.rs/bindgen](https://docs.rs/bindgen)
