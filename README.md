:warning: This project is unmaintained. If you're looking for a good example of Origami being used with React, have a look at the setup in [spark-lists](https://github.com/Financial-Times/spark-lists/tree/8eb8f61c84aaf9328ae7fad4e85c832b6bd63151/src/client/components/Origami#origami-react-components) :warning: 

# Using Origami with React:

## To run

`npm run start`

## Method 1: Custom Webpack
This method assumes a knowledge of React and basic knowledge of Webpack, if you'd rather not deal
with Webpack and Bower, skip to Method 2, using the Origami Build Tools as a convenient layer over
Webpack and Bower.

1. Set up a React project with Webpack. You can reuse code in this repo if it covers your use case.

_NB:_ you cannot use a scaffold like Create React App here, because you need to edit the `webpack.config.js` file, and Create React App won’t (easily) let you do that.

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

5. For the Webpack config, you can copy all of webpack.config.js here or simply copy over the `resolve` property on `module.exports` AND add `BowerResolvePlugin`.
Install it as a dependency `npm i bower-resolve-webpack-plugin` and require it at the top of your Webpack config file: `const BowerResolvePlugin = require('bower-resolve-webpack-plugin')`

6. To add the Origami styles, create a file like `client/styles.scss`, import the Origami components you need and set is-silent to false. For example:
```
$o-buttons-is-silent: false;
$o-colors-is-silent: false;
$o-table-is-silent: false;

@import 'o-colors/main';
@import 'o-buttons/main';
@import 'o-table/main';
```

7. Import the styles in your entry file: for example add `import './styles.scss'` to `index.js` (paying attention to what the file path should be).

8. To add the Origami javascript, create a React component that will contain it. Something like what's in the [Table component](https://github.com/Financial-Times/origami-react/blob/master/client/components/Table.jsx).

9. In the render method of your new component, add the Origami HTML converting it to JSX (remembering to change `class` to `className` and that JSX components need to have a single element as the parent).

10. Import the javascript for the Origami component in your new React file. This import syntax should work:
```
import OTable from 'o-table'
```

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

_GOTCHAS:_
Make sure you add the ref attribute to a jsx element, not a React component containing the JSX element.

## Method 2: With Origami Build Tools

The [Origami Build Tools](http://origami.ft.com/docs/developer-guide/modules/building-modules/) installs Bower and Webpack under the hood, meaning you don't need to write all the configuration for these two tools yourself.

Do amend package.json to run the OBT commands:
  ```
  "scripts": {
    "start": "obt build  --watch --runServer",
    "build": "obt build index.js",
  }
  ```

And then... hopefully just pick this up from step 6.
