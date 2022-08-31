# usp-population-counter



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [usp-kql-analyser](../kql-analyser)
 - [usp-query-builder-editor](../query-builder-editor)
 - [usp-query-builder-legacy](../query-builder-legacy)

### Depends on

- kwc-modal
- [usp-population-insights](../population-insights)
- kwc-tooltip
- kwc-loading-icon
- kwc-button
- kwc-sync-icon
- kwc-alert

### Graph
```mermaid
graph TD;
  usp-population-counter --> kwc-modal
  usp-population-counter --> usp-population-insights
  usp-population-counter --> kwc-tooltip
  usp-population-counter --> kwc-loading-icon
  usp-population-counter --> kwc-button
  usp-population-counter --> kwc-sync-icon
  usp-population-counter --> kwc-alert
  kwc-modal --> kwc-portal-creator
  usp-population-insights --> usp-base-population-select
  usp-population-insights --> kwc-tabs
  usp-population-insights --> kwc-tab
  usp-population-insights --> usp-population-drilldown
  usp-population-insights --> usp-population-sampling
  usp-base-population-select --> kwc-select
  usp-base-population-select --> kwc-option
  kwc-select --> kwc-right-icon
  kwc-select --> kwc-portal-creator
  usp-population-drilldown --> kwc-loading-icon
  usp-population-drilldown --> kwc-info-box-grid
  usp-population-drilldown --> kwc-info-box
  usp-population-drilldown --> kwc-global-icon
  usp-population-drilldown --> kwc-team-icon
  usp-population-drilldown --> kwc-fund-projection-screen-icon
  usp-population-drilldown --> kwc-alert
  kwc-alert --> kwc-close-circle-icon
  kwc-alert --> kwc-warning-icon
  kwc-alert --> kwc-info-circle-icon
  usp-population-sampling --> usp-user-sampling
  usp-user-sampling --> kwc-empty
  usp-user-sampling --> kwc-list
  usp-user-sampling --> kwc-pagination
  usp-user-sampling --> kwc-alert
  kwc-empty --> kwc-empty-icon
  kwc-pagination --> kwc-loading-icon
  kwc-pagination --> kwc-right-icon
  kwc-tooltip --> kwc-portal-creator
  usp-kql-analyser --> usp-population-counter
  usp-query-builder-editor --> usp-population-counter
  usp-query-builder-legacy --> usp-population-counter
  style usp-population-counter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
