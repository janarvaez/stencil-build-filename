# usp-user-details



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [usp-is-user-in-segment](../is-user-in-segment)

### Depends on

- kwc-alert
- kwc-loading-icon
- kwc-empty

### Graph
```mermaid
graph TD;
  usp-user-details --> kwc-alert
  usp-user-details --> kwc-loading-icon
  usp-user-details --> kwc-empty
  kwc-alert --> kwc-close-circle-icon
  kwc-alert --> kwc-warning-icon
  kwc-alert --> kwc-info-circle-icon
  kwc-empty --> kwc-empty-icon
  usp-is-user-in-segment --> usp-user-details
  style usp-user-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
