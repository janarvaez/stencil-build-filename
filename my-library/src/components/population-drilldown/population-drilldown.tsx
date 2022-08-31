import {
  Component,

  h,

} from '@stencil/core';

@Component({
  tag: 'usp-population-drilldown',
  shadow: true,
})
export class PopulationDrilldown {
  
 

  render() {
    
    
    
    return (
      <div>
        <ErrorMessage />
    
            <kwc-loading-icon /> 
        
            <kwc-info-box-grid>
              <kwc-info-box
                >
                <kwc-global-icon />
              </kwc-info-box>
              <kwc-info-box
               
              >
                <kwc-team-icon />
              </kwc-info-box>
              <kwc-info-box
              >
                <kwc-fund-projection-screen-icon />
              </kwc-info-box>
            </kwc-info-box-grid>
       
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
