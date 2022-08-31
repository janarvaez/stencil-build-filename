import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'kwc-tag',
  shadow: true,
})
export class Tag {
 

  render() {
    return (
      <Host>
        
              <kwc-close-icon />
           
      </Host>
    );
  }
}
