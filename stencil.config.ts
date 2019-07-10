import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mdc-stencil',
  plugins: [
    sass({
      includePaths: ['node_modules']  // necessary to be able to import scss via '@'
    })
    
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
};