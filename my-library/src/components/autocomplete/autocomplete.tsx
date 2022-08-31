import {
  Component,
  h
} from '@stencil/core';

@Component({
  tag: 'usp-autocomplete',
  shadow: true,
})
export class Autocomplete {
  render() {
    return (
      <kwc-portal-creator />
    );
  }
}
