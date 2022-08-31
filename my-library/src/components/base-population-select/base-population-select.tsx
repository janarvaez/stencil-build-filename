import {
  Component,

  h,

} from '@stencil/core';

@Component({
  tag: 'usp-base-population-select',
  shadow: true,
})
export class BasePopulationSelect {
  render() {
    return (

        <kwc-select
          value={''}
          class="select"
        >
          <kwc-option value={'value'}>label</kwc-option>
        </kwc-select>

    );
  }
}
