/* eslint-disable @stencil/strict-boolean-conditions */
import {
  Component,
  h,
} from '@stencil/core';

@Component({
  tag: 'usp-is-user-in-segment',
  shadow: true,
})
export class IsUserInSegment {
  
  
  get statusMessage() {
      return ([
        <kwc-tooltip>

            <kwc-exclamation-circle-icon />

        </kwc-tooltip>,
        <kwc-modal>
          <kwc-alert></kwc-alert>
        </kwc-modal>, 
          <kwc-loading-icon />
,
         <kwc-tooltip>
           <kwc-check-icon />

       </kwc-tooltip>,
        <kwc-close-icon />,
        <usp-user-details />
      ]
       
      );
  }



  render() {
    return <div>{this.statusMessage}

          <kwc-tooltip>
            <kwc-button>
              <kwc-contacts-icon />
            </kwc-button>
          </kwc-tooltip>
</div>;
  }
}
