import {
  Component,

  h,

} from '@stencil/core';


@Component({
  tag: 'usp-user-details',
  shadow: true,
})
export class UserDetails {


  render() {
    
    
    return (
      <div >
        <kwc-alert></kwc-alert>
     
          <kwc-loading-icon /> 
       
            <kwc-empty />
         
      </div>
    );
  }
}
