import { Component, h,  Host } from '@stencil/core';

@Component({
  tag: 'kwc-tooltip',
  shadow: true,
})
export class Tooltip {
 
  render() {
    return (
      <Host>
       
        <kwc-portal-creator
          
        />
      </Host>
    );
  }
}
