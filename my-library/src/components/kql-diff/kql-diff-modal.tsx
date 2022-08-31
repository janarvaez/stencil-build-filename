import {
  Component,
  h,
  Host,

} from '@stencil/core';


@Component({
  tag: 'usp-kql-diff-modal',
  shadow: true,
})
export class KqlDiffModal {

  private get diffModal() {
    return <kwc-modal
       
      >
       
        <usp-kql-diff
          
        />
      </kwc-modal>;
  }

  render() {
    return (
      <Host>
        {this.diffModal}
       
            <kwc-button>Open KQL diff</kwc-button>
          
      </Host>
    );
  }
}
