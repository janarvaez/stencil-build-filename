import {

  Component,

  h,

} from '@stencil/core';


@Component({
  tag: 'usp-query-builder',
  shadow: true,
})
export class QueryBuilder {
  
  render() {
    return <div>
    
    <usp-query-builder-legacy
    
      
    />

    <usp-query-builder-editor
    
    />
    </div>;
  }
}
