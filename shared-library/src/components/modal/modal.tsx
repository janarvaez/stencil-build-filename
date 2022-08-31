import { Component, h,  Host } from '@stencil/core';

@Component({
  tag: 'kwc-modal',
  shadow: true,
})
export class Modal {
 

  

  render() {
    return (
      <Host >

        <kwc-portal-creator
          
        />
      </Host>
    );
  }
}
