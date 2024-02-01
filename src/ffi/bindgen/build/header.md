# Header

- `header`
- `header_contents`

## Examples

```rust,noplayground
# extern crate bindgen;
bindgen::builder()
    .header("wrapper.h");
```

```rust,noplayground
# extern crate bindgen;
bindgen::builder()
    .header_contents("wrapper.h", "#include <lib.h>");
```

## References

- [https://docs.rs/bindgen/latest/bindgen/struct.Builder.html](https://docs.rs/bindgen/latest/bindgen/struct.Builder.html)
