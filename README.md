# Stencil issue: https://github.com/ionic-team/stencil/issues/3505

How to reproduce:

```bash
cd shared-library
npm i
npm run build

cd ../my-library
npm i
npm run build
```

Look into /my-library/dist/esm/, there should be a file called 
`kwc-check-circle-icon_23.entry.js` which means it tried to bundle 23 files together.

Now this doesn't break, because I think after removing all my implementation code, 
there is not enough code to generate the split hashed files and it directly exports
the definitions from itself.

One thing I found is that this happens after having this [import](https://github.com/janarvaez/stencil-build-filename/blob/6450f10ac9509b033900871c319c6d144baebb62/my-library/src/index.ts#L1).
I added it here for demo purposes, but in my original repo, I had it in my 'setupTests.ts'
file in order to be able to get types in my tests. And I had this in my 'includes' in the
tsconfig.json to get rid of jest errors in the editor.

After adding that import, Stencil bundles the whole shared-library as part of the
my-library bundle, which is desired, but not sure if this is the proper approach.

I think this can be solved just by configuring it the right way (an official guide
on how to bundle a Stencil library inside another would be awesome) but this doesn't
take away the fact that it could happen in any other setup.

My current workaround is by manually splitting the bundles [like this](https://github.com/janarvaez/stencil-build-filename/blob/6450f10ac9509b033900871c319c6d144baebb62/my-library/stencil.config.ts#L7)
