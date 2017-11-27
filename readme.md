# BaseCSS

BaseCSS is just a set of baseline CSS files in both SASS and CSS to be used in projects.

> [DEMO style guide](https://joellongie.github.io/base-css/)

## Install
- `npm install` will install all necessary packages

## Run
- `npm run dev` use this for development, has sourcemaps. 
- `npm run build` removes then rebuilds `dist` folder, create a `main.css` and `main.min.css`.
- `npm run clean` remove `dist` folder.

To deploy: run `npm run build` to create production ready files. Final CSS assets are in the `dist` folder. `src` folder is used for source files to be precompiled.

To check final output an `index.html` file is provided to view output during development.