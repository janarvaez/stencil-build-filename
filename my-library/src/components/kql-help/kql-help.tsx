import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'usp-kql-help',
  shadow: true,
})
export class KqlHelp {
  
  render() {
    return (
      <Host>
        <kwc-button >
          <kwc-question-circle-icon />
         
        </kwc-button>
        <kwc-portal-creator
          
        />
      </Host>
    );
  }
}
