import {
  Component,
  h,
} from '@stencil/core';

@Component({
  tag: 'usp-autocomplete-container',
  shadow: true,
})
export class AutocompleteContainer {

  render() {
    return  getSuggestionMarkup();
  }
}

function getSuggestionMarkup(): HTMLLIElement {
  return (
    <li>
      <kwc-tag>content</kwc-tag>
    </li>
  );
}
