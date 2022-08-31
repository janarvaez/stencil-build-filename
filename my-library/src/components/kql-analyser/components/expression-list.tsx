import { FunctionalComponent, h } from '@stencil/core';


export const ExpressionList: FunctionalComponent = () => {

  return  <div class="title">
          
              <kwc-tooltip>
                
                <kwc-warning-icon />
              </kwc-tooltip>
            
        <usp-query-builder />
      
              <kwc-close-icon />

    </div>
  ;
};
