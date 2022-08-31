
import {
  Component,

  h,

} from '@stencil/core';


import { BaseExpressionCard, EditButtons, Sorter } from './components';

@Component({
  tag: 'usp-kql-diff',
  shadow: true,
})
export class KqlDiff {
 
  render() {
   
   

    return (
      <div>
        <kwc-alert >
        </kwc-alert>
       
          <usp-kql-analyser-link
           
          >
           
          </usp-kql-analyser-link>
      
        <BaseExpressionCard
         
        />
        
                <kwc-card
                  >
               
                    <EditButtons
                      
                    />
                 
                    <Sorter
                      />
                 

                 
                    <usp-query-builder
                      
                    ></usp-query-builder>
                  
                    <usp-single-kql-diff
                     
                    />
                  
                </kwc-card>
             
      </div>
    );
  }
}
