import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

import { components } from 'shared-library/dist/docs.json';
const webComponents = components.map((c) => c.tag);

/* const perChunk = 5;
const chunkedSharedComponents = webComponents.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = { components: [] as string[] }; // start a new chunk
  }

  resultArray[chunkIndex].components.push(item);

  return resultArray;
}, [] as Array<{ components: string[] }>); */

export const config: Config = {
  namespace: 'my-library',
  taskQueue: 'async',
  buildEs5: false,
  sourceMap: true,
/*   bundles: [
    ...chunkedSharedComponents,
  ], */
  outputTargets: [
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    reactOutputTarget({
      componentCorePackage: 'my-library-react-wrapper',
      proxiesFile: '../my-library-react-wrapper/src/components.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
      excludeComponents: webComponents,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
