import { Component, h } from '@stencil/core';

@Component({
  tag: 'kwc-alert',
  shadow: true,
})
export class Alert {
  render() {
    return (
      <div>
       <kwc-close-circle-icon />
       <kwc-warning-icon />
       <kwc-info-circle-icon />
      </div>
    );
  }
}
