# `#[from]`

- `impl From` generated for each variant that contains a `#[from]`
- `#[from]` implies `#[source]`

## Examples

### From

```rust,editable,ignore
#[derive(Error, Debug)]
pub enum MyError {
    Io(#[from] io::Error),
    Glob(#[from] globset::Error),
}
```

## Caveats

- variant with `#[from]` must not contain any other fields beyond the source error

## References

- [thiserror](https://docs.rs/thiserror/latest/thiserror/#details)
