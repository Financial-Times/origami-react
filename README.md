# Using Origami with React:

## Method 1: Custom Webpack 

1. Set up a react project with webpack. (Follow a tutorial on this. NB: you cannot use a scaffold like Create React App here, because you need to edit the webpack.config, and CRA won’t (easily) let you do that.) 

2. Add bower as a dependency: `npm i bower --save-dev`

3. Add a bower.json file - including the components you want. 

4. Add a .bowerrc file - copy this [LINK] 

5. For the web pack config, you can copy all of this [LINK] or simply the `resolve` property on `module.exports` AND add `BowerResolvePlugin`.
Install it as a dependency `npm i bower-resolve-webpack-plugin` and require it at the top of your webpack config file: `const BowerResolvePlugin = require('bower-resolve-webpack-plugin');`


6. To add the Origami styles, create a file like styles.scss [LINK], import the o-files you need and set is-silent to false. (See file for syntax) 

7. Import the styles in your entry file index.js [LINK]

8. To add the Origami javascript, create a react component that will contain it. For example like this:

9. In the render method of your new component, add the Origami html ( remembering to change class to “className” and that React components need to have a single element as the parent). Technically the html is now jsx. 

10. Import the origami component into your react file [LINK]. This syntax should work, but check the naming of the key function `import OTable from 'o-table'`;

11. Add a ref attribute to the html element you want to attach the javascript to. For example for o-table, this will be the parent <table> element. The ref attribute takes a callback function which is given a reference to a DOM Element as its argument. It lets you access the actual DOM. Better explained in [React Documentation](https://facebook.github.io/react/docs/refs-and-the-dom.html).

12. Add a componentDidMount function to the react component. Use the `init()` method on the OTABLE class and pass it the reference to the DOM element as an argument. [LINK]

It should now work 

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


