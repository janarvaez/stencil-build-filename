import { Fragment, FunctionalComponent, h } from '@stencil/core';

import { ApiResponseDisplay } from './api-response-display';

export const PopulationAnalysis: FunctionalComponent = () => {

  return (
    <div>
      <usp-base-population-select />
      <ApiResponseDisplay>
        
          <kwc-empty />
        
          <kwc-info-box-grid>
            <kwc-info-box>
              <kwc-global-icon />
            </kwc-info-box>
            <kwc-info-box>
              <kwc-team-icon />
            </kwc-info-box>
            <kwc-info-box>
              <kwc-stop-icon />
            </kwc-info-box>
          </kwc-info-box-grid>
      </ApiResponseDisplay>

     
        <Fragment>
                <kwc-code></kwc-code>
                <kwc-button >
                </kwc-button>
        </Fragment>

        <kwc-descriptions>
          <kwc-description-item>
          </kwc-description-item>
          
              <usp-population-counter />
            
        </kwc-descriptions>
    </div>
  );
};
