import {
  Component,

  h,

} from '@stencil/core';

@Component({
  tag: 'kwc-pagination',
  shadow: true,
})
export class Pagination {
  

 

  render() {
    return (<div>
       
            <kwc-loading-icon />
         
              <kwc-right-icon />
            
              <kwc-right-icon />
           
      </div>
    );
  }
}
