import {
  Component,
  h,
} from '@stencil/core';
import { PopulationAnalysis } from './components/population-analysis';
import { ClashAnalysis } from './components/clash-analysis';
import { ExpressionList } from './components/expression-list';

@Component({
  tag: 'usp-kql-analyser',
  shadow: true,
})
export class KqlAnalyser {
  render() {
    return (
      <div>

            <ExpressionList />

                <kwc-button></kwc-button>

                <kwc-tag
      
      >
        hello
      </kwc-tag>
          <kwc-card>
            <usp-kql-diff-modal>
              <kwc-button></kwc-button>
            </usp-kql-diff-modal>


              <ClashAnalysis />

              <kwc-divider />

              <PopulationAnalysis />
           
          </kwc-card>
      </div>
    );
  }
}
