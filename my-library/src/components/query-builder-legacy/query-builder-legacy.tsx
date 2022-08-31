import {
  Component,
  h,

} from '@stencil/core';


import { ActionRow } from '../query-builder/components/action-row';


@Component({
  tag: 'usp-query-builder-legacy',
  shadow: true,
})
export class QueryBuilderLegacy {
  

  render() {
    return (
      <div><kwc-exclamation-circle-icon />
  <kwc-warning-icon />
 

          <kwc-loading-icon />
       
          <kwc-check-circle-icon />

      <kwc-tooltip>
        
      </kwc-tooltip>
   
      <kwc-modal>
        
          <kwc-alert>
            
          </kwc-alert>

      </kwc-modal>
                <usp-text-input
                  
                >
                </usp-text-input>
                <usp-autocomplete
                  
                ></usp-autocomplete>
                
            <ActionRow />
              
          
              <usp-population-counter
              
              ></usp-population-counter>
            
      </div>
    );
  }
}
