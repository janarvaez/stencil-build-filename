import { h } from '@stencil/core';

export const StatusMessage = () => {
  
  
  return (
    <kwc-tooltip>
      <kwc-loading-icon />
    
      <kwc-check-circle-icon />
       <kwc-warning-icon />  <kwc-exclamation-circle-icon />
    </kwc-tooltip>
  );
};
