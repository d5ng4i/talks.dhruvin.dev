# `#[source]`

- to identify underlying cause
- field marked `#[source]` or is named `source`

## Examples

### Source

```rust,editable,ignore
#[derive(Error, Debug)]
pub struct MyError {
    msg: String,
    #[source]  // optional if field name is `source`
    source: anyhow::Error,
}
```

## Caveats

- source must implement `Error` or `Deref<Target = dyn Error>`

## References

- [thiserror](https://docs.rs/thiserror/latest/thiserror/#details)
