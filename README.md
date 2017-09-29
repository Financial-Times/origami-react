# Using Origami with React:

## To run

`npm run start`

## Method 1: Custom Webpack
This method assumes a knowledge of React and basic knowledge of Webpack, if you'd rather not deal
with Webpack and Bower, skip to Method 2, using the Origami Build Tools as a nice convenient layer over
Webpack and Bower.

1. Set up a React project with Webpack. Follow a tutorial on this or reuse code in this repo.
NB: you cannot use a scaffold like Create React App here, because you need to edit the `webpack.config.js` file, and Create React App won’t (easily) let you do that.

2. Add bower as a dependency: `npm i bower --save-dev`

3. Add a bower.json file - including the components you want:
```
{
  "name": "react-origami",
  "private": true,
  "dependencies": {
    "o-colors": "^4.1.1",
    "o-buttons": "^5.3.1",
    "o-table": "^6.2.1"
  }
}

```

4. Add a .bowerrc file - for example:
```
{
  "directory": "bower_components",
  "registry": {
    "search": [
      "https://origami-bower-registry.ft.com",
      "https://bower.herokuapp.com"
    ]
  }
}
```

5. For the Webpack config, you can copy all of the file above or simply use the `resolve` property on `module.exports` AND add `BowerResolvePlugin`.
Install it as a dependency `npm i bower-resolve-webpack-plugin` and require it at the top of your Webpack config file: `const BowerResolvePlugin = require('bower-resolve-webpack-plugin');`

6. To add the Origami styles, create a file like `client/styles.scss`, import the o-files you need and set is-silent to false. For example:
```
$o-buttons-is-silent: false;
$o-colors-is-silent: false;
$o-table-is-silent: false;

@import 'o-colors/main';
@import 'o-buttons/main';
@import 'o-table/main';
```

7. Import the styles in your entry file `index.js`: add `import './styles.scss'` (paying attention to what the file path should be).

8. To add the Origami javascript, create a react component that will contain it. Something like what's in this file: `client/components/Table.jsx`.

9. In the render method of your new component, add the Origami HTML (remembering to change `class` to `className` and that React components need to have a single element as the parent).

10. Import the javascript for the Origami Component you want into your React component. This import syntax should work: `import OTable from 'o-table'` - swapping in the component and function names you want.

11. In the render method, add a `ref` attribute to the element you want to attach the javascript to. For example for o-table, this will be the parent `<table>` element. The ref attribute takes a callback function which is given a reference to a DOM Element as its argument. It lets you access the actual DOM. Better explained in the [React Documentation](https://facebook.github.io/react/docs/refs-and-the-dom.html).
```
  <table className="o-table" data-o-component="o-table" ref={(table) => { this.table = table; }}>
    ...
    </table>
```

12. Add a `componentDidMount` function to the react component. Use the `init()` method on the `OTable` javascript class you have imported in, and pass it the reference to the DOM element (this.table, in this case) as an argument.
```
componentDidMount(){
  OTable.init(this.table);
}
```

It should now work. :pray:

GOTCHAS:
Make sure you add the ref attribute to a jsx element, not a React component containing the JSX element.

## Method 2: With Origami Build Tools

Hopefully just pick this up from step 6.

In package.json
  ```
  "scripts": {
    "start": "obt build  --watch --runServer",
    "build": "obt build index.js",
  }
  ```
The Origami Build Tools installs bower and webpack under the hood, meaning you don't need to write all the webpack and bower configuration yourself.
