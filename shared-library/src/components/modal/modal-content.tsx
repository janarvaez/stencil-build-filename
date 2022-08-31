import { Component, h} from '@stencil/core';


@Component({
  tag: 'kwc-modal-content',
  shadow: true,
})
export class ModalContent {
 


  render() {
    return (
      <div >

                  <kwc-close-icon />
                
                    <kwc-empty  />
                  
                  <kwc-button>

                  </kwc-button>
                
      </div>
    );
  }
}
