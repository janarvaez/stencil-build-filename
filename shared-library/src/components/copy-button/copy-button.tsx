import {
  Component,
  h,

} from '@stencil/core';

@Component({
  tag: 'kwc-copy-button',
  shadow: true,
})
export class CopyButton {
  

  render() {
    return (
     
        <kwc-button
         
        >
         <kwc-copy-icon />
        </kwc-button>
      
    );
  }
}
