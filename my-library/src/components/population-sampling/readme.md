# usp-population-sampling



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [usp-population-insights](../population-insights)

### Depends on

- [usp-user-sampling](../user-sampling)

### Graph
```mermaid
graph TD;
  usp-population-sampling --> usp-user-sampling
  usp-user-sampling --> kwc-empty
  usp-user-sampling --> kwc-list
  usp-user-sampling --> kwc-pagination
  usp-user-sampling --> kwc-alert
  kwc-empty --> kwc-empty-icon
  kwc-pagination --> kwc-loading-icon
  kwc-pagination --> kwc-right-icon
  kwc-alert --> kwc-close-circle-icon
  kwc-alert --> kwc-warning-icon
  kwc-alert --> kwc-info-circle-icon
  usp-population-insights --> usp-population-sampling
  style usp-population-sampling fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
