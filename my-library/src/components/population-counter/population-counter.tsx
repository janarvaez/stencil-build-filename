
import {
  Component,

  h,

} from '@stencil/core';


@Component({
  tag: 'usp-population-counter',
  shadow: true,
})
export class PopulationCounter {
 
  private get insightsModal() {
    return <kwc-modal
       
      >
        
          <usp-population-insights
           
          />
       
       <ErrorMessage />
      </kwc-modal>;
  }

  render() {
    return (
      <div>
        {this.insightsModal}
                <kwc-tooltip>
                  
                </kwc-tooltip>
              
              <kwc-tooltip>
               
                      <kwc-loading-icon />
                   
              </kwc-tooltip>
            
            <kwc-tooltip>
              
              <kwc-button
                 >
                <kwc-sync-icon />
              </kwc-button>
            </kwc-tooltip>
          
      </div>
    );
  }
}

const ErrorMessage = () => {
  return (
    
      <kwc-alert>
       
      </kwc-alert>
      
  );
};
;
