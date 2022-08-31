
import { Fragment, h } from '@stencil/core';

export const ActionRow = () => {
  return (
    <Fragment>
      
          <usp-kql-help
            
          />
        
          <kwc-button >
            <kwc-sync-icon /> 
          </kwc-button>
      
          <kwc-copy-button >
           
          </kwc-copy-button>
        
          <kwc-button >
            <kwc-user-icon />
          </kwc-button>
        
            <usp-is-user-in-segment
             
            />
         
    </Fragment>
  );
};
