import {
  Component,
  h,
} from '@stencil/core';

@Component({
  tag: 'usp-kql-editor',
  shadow: true,
})
export class KqlEditor {
  
  render() {
    return (
      <div>
        
              <kwc-close-circle-icon /> 
              <kwc-loading-icon />
      </div>
    );
  }
}
