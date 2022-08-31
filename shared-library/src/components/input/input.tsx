import { Component,  h,} from '@stencil/core';

@Component({
  tag: 'kwc-input',
  shadow: true,
})
export class Input {
  render() {
    return <kwc-close-circle-filled-icon />;
  }
}
