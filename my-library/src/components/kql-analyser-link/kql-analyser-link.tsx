import {
  Component,
  Fragment,
  h,
} from '@stencil/core';


@Component({
  tag: 'usp-kql-analyser-link',
  shadow: true,
})
export class KqlAnalyserLink {
  private iconMap = {
    a: <kwc-copy-icon />,
    b: <kwc-share-icon />,
    c: <kwc-new-tab-icon />,
  };

  render() {

      

    return (
      <kwc-copy-button
      >
        <Fragment>
       
          <kwc-tooltip>
           {this.iconMap.a}
            <kwc-question-circle-icon/>
          </kwc-tooltip>
   
      </Fragment>
    
        <kwc-button
           >
         
        </kwc-button>
      
      </kwc-copy-button>
    );
  }
}
