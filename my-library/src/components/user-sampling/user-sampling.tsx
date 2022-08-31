import {
  Component,

  h,

} from '@stencil/core';


@Component({
  tag: 'usp-user-sampling',
  shadow: true,
})
export class UserSampling {


  render() {
    return (
      <div>
        <ErrorMessage />
       
            <kwc-empty />
         
            <kwc-list>
              
            </kwc-list>
         
          <kwc-pagination
            
          />
        
      </div>
    );
  }
}

const ErrorMessage = () => {
  return (
    
      <kwc-alert >
        
      </kwc-alert>
      
  );
};
