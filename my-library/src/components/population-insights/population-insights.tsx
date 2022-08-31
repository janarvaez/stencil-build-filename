import {
  Component,
  h,
} from '@stencil/core';
@Component({
  tag: 'usp-population-insights',
  shadow: true,
})
export class PopulationInsights {
  
  
  render() {
    return (
      <div>
        
          <usp-base-population-select
           
          />
       
        <kwc-tabs>
          <kwc-tab>
            <usp-population-drilldown
             
            />
          </kwc-tab>
          <kwc-tab >
            <usp-population-sampling
             
            />
          </kwc-tab>
        </kwc-tabs>
      </div>
    );
  }
}
