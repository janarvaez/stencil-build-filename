# usp-is-user-in-segment



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [usp-query-builder-editor](../query-builder-editor)
 - [usp-query-builder-legacy](../query-builder-legacy)

### Depends on

- kwc-tooltip
- kwc-exclamation-circle-icon
- kwc-modal
- kwc-alert
- kwc-loading-icon
- kwc-check-icon
- kwc-close-icon
- [usp-user-details](../user-details)
- kwc-button
- kwc-contacts-icon

### Graph
```mermaid
graph TD;
  usp-is-user-in-segment --> kwc-tooltip
  usp-is-user-in-segment --> kwc-exclamation-circle-icon
  usp-is-user-in-segment --> kwc-modal
  usp-is-user-in-segment --> kwc-alert
  usp-is-user-in-segment --> kwc-loading-icon
  usp-is-user-in-segment --> kwc-check-icon
  usp-is-user-in-segment --> kwc-close-icon
  usp-is-user-in-segment --> usp-user-details
  usp-is-user-in-segment --> kwc-button
  usp-is-user-in-segment --> kwc-contacts-icon
  kwc-tooltip --> kwc-portal-creator
  kwc-modal --> kwc-portal-creator
  kwc-alert --> kwc-close-circle-icon
  kwc-alert --> kwc-warning-icon
  kwc-alert --> kwc-info-circle-icon
  usp-user-details --> kwc-alert
  usp-user-details --> kwc-loading-icon
  usp-user-details --> kwc-empty
  kwc-empty --> kwc-empty-icon
  usp-query-builder-editor --> usp-is-user-in-segment
  usp-query-builder-legacy --> usp-is-user-in-segment
  style usp-is-user-in-segment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
