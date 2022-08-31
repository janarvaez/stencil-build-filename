import { h, FunctionalComponent } from '@stencil/core';

export const BaseExpressionCard: FunctionalComponent = () => {
  return (
    <kwc-card>
      
        <kwc-select>
          <kwc-option></kwc-option>
        </kwc-select>
     
      <usp-single-kql-diff />
    </kwc-card>
  );
};
