# `#[error(transparent)]`

- forwards the `Error::source` and `Display::fmt` to `#[source]`

## Examples

### Anything else

```rust,editable,ignore
#[derive(Error, Debug)]
pub enum MyError {
    ...

    #[error(transparent)]
    Other(#[from] anyhow::Error),  // source and Display delegate to anyhow::Error
}
```

### Hide implementation detail

```rust,editable,ignore
// PublicError is public, but opaque and easy to keep compatible.
#[derive(Error, Debug)]
#[error(transparent)]
pub struct PublicError(#[from] ErrorRepr);

impl PublicError {
    // Accessors for anything we do want to expose publicly.
}

// Private and free to change across minor version of the crate.
#[derive(Error, Debug)]
enum ErrorRepr {
    ...
}
```

## References

- [thiserror](https://docs.rs/thiserror/latest/thiserror/#details)
