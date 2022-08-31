import { h, FunctionalComponent } from '@stencil/core';


export const Sorter: FunctionalComponent = () => {
  return (
    <div>
      <kwc-tooltip>
        
        <kwc-button
         
        >
          <kwc-vertical-align-top-icon />
        </kwc-button>
      </kwc-tooltip>
      <kwc-tooltip>
       
        <kwc-button
          
        >
          <kwc-up-icon />
        </kwc-button>
      </kwc-tooltip>
      <kwc-tooltip>
       
        <kwc-button
          
        >
          <kwc-down-icon />
        </kwc-button>
      </kwc-tooltip>
      <kwc-tooltip>
       
        <kwc-button
          
        >
          <kwc-vertical-align-bottom-icon />
        </kwc-button>
      </kwc-tooltip>
    </div>
  );
};
