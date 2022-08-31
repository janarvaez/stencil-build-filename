import {
  Component,
  h,
} from '@stencil/core';

import {
  WidgetFooter,
  WidgetResultDetails,
  WidgetResults,
  WidgetSearch,
  WidgetTopBar,
} from './components';

@Component({
  tag: 'usp-kql-help-widget',
  shadow: true,
})
export class KqlHelpWidget {
 
  render() {
    return (
     <div>
          <WidgetTopBar
            />

                  <WidgetSearch
                   
                  />

                  <WidgetResults
                    
                  />
                
                <WidgetResultDetails
                 
                />
              

          <WidgetFooter  />
        </div>
      );
  }
}
