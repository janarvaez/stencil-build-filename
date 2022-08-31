import {
  Component,
  h,
} from '@stencil/core';

import { ActionRow } from '../query-builder/components/action-row';
import { StatusMessage } from './components/StatusMessage';


@Component({
  tag: 'usp-query-builder-editor',
  shadow: true,
})
export class QueryBuilderEditor {
  
 


  
  render() {
    return (
      <div>
        <kwc-modal
         
        >
         
            <kwc-alert type="error">
              
            </kwc-alert>
          
        
        </kwc-modal>
       
       
                    <kwc-loading-icon />
                
                <usp-editor-iframe-wrapper
                  
                />
                
                  <StatusMessage
                   
                  />
                
            <ActionRow
              
          
            />
          
              <usp-population-counter
               
              ></usp-population-counter>
            
      </div>
    );
  }
}
