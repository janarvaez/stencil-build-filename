import { FunctionalComponent, h } from '@stencil/core';
import { ApiResponseDisplay } from './api-response-display';

export const ClashAnalysis: FunctionalComponent = () => {
  return (
    <div>
      <ApiResponseDisplay>
        
              <kwc-check-circle-icon />
           
                <kwc-warning-icon />
              
            <kwc-descriptions>
              <kwc-description-item>
                
              </kwc-description-item>
              
            </kwc-descriptions>
          
      </ApiResponseDisplay>
    </div>
  );
};
