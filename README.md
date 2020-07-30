# corona_virus_app

# covid-19 API Link:
https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest

README.md
This project was bootstrapped with Create React App.

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide here.

Table of Contents
Updating to New Releases
Sending Feedback
Folder Structure
Available Scripts
npm start
npm test
npm run build
npm run eject
Supported Language Features and Polyfills
Syntax Highlighting in the Editor
Displaying Lint Output in the Editor
Debugging in the Editor
Changing the Page <title>
Installing a Dependency
Importing a Component
Adding a Stylesheet
Post-Processing CSS
Adding a CSS Preprocessor (Sass, Less etc.)
Adding Images and Fonts
Using the public Folder
Changing the HTML
Adding Assets Outside of the Module System
When to Use the public Folder
Using Global Variables
Adding Bootstrap
Using a Custom Theme
Adding Flow
Adding Custom Environment Variables
Referencing Environment Variables in the HTML
Adding Temporary Environment Variables In Your Shell
Adding Development Environment Variables In .env
Can I Use Decorators?
Integrating with an API Backend
Node
Ruby on Rails
Proxying API Requests in Development
Using HTTPS in Development
Generating Dynamic <meta> Tags on the Server
Pre-Rendering into Static HTML Files
Injecting Data from the Server into the Page
Running Tests
Filename Conventions
Command Line Interface
Version Control Integration
Writing Tests
Testing Components
Using Third Party Assertion Libraries
Initializing Test Environment
Focusing and Excluding Tests
Coverage Reporting
Continuous Integration
Disabling jsdom
Snapshot Testing
Editor Integration
Developing Components in Isolation
Making a Progressive Web App
Deployment
Static Server
Other Solutions
Serving Apps with Client-Side Routing
Building for Relative Paths
Azure
Firebase
GitHub Pages
Heroku
Modulus
Netlify
Now
S3 and CloudFront
Surge
Advanced Configuration
Troubleshooting
npm start doesn’t detect changes
npm test hangs on macOS Sierra
npm run build silently fails
npm run build fails on Heroku
Something Missing?
Updating to New Releases
Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects.
react-scripts is a development dependency in the generated projects (including this one).
You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly.

Sending Feedback
We are always open to your feedback.

Folder Structure
After creation, your project should look like this:

my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, or Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Supported Language Features and Polyfills
This project supports a superset of the latest JavaScript standard.
In addition to ES6 syntax features, it also supports:

Exponentiation Operator (ES2016).
Async/await (ES2017).
Object Rest/Spread Properties (stage 3 proposal).
Class Fields and Static Properties (stage 2 proposal).
JSX and Flow syntax.
Learn more about different proposal stages.

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide codemods if any of these proposals change in the future.

Note that the project only includes a few ES6 polyfills:

Object.assign() via object-assign.
Promise via promise.
fetch() via whatwg-fetch.
If you use any other ES6+ features that need runtime support (such as Array.from() or Symbol), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Syntax Highlighting in the Editor
To configure the syntax highlighting in your favorite text editor, head to the relevant Babel documentation page and follow the instructions. Some of the most popular editors are covered.

Displaying Lint Output in the Editor
Note: this feature is available with react-scripts@0.2.0 and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

A note for Atom linter-eslint users

If you are using the Atom linter-eslint plugin, make sure that Use global ESLint installation option is checked:


For Visual Studio Code users

VS Code ESLint plugin automatically detects Create React App's configuration file. So you do not need to create eslintrc.json at the root directory, except when you want to add your own rules. In that case, you should include CRA's config by adding this line:

{ // ... "extends": "react-app" }


Then add this block to the `package.json` file of your project:

```js
{
  // ...
  "eslintConfig": {
    "extends": "react-app"
  }
}
Finally, you will need to install some packages globally:

npm install -g eslint-config-react-app@0.3.0 eslint@3.8.1 babel-eslint@7.0.0 eslint-plugin-react@6.4.1 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-flowtype@2.21.0
We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already working on a solution to this so this may become unnecessary in a couple of months.

Debugging in the Editor
This feature is currently only supported by Visual Studio Code editor.

Visual Studio Code supports live-editing and debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

You would need to have the latest version of VS Code and VS Code Chrome Debugger Extension installed.

Then add the block below to your launch.json file and put it inside the .vscode folder in your app’s root directory.

{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "userDataDir": "${workspaceRoot}/.vscode/chrome",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
Start your app by running npm start, and start debugging in VS Code by pressing F5 or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

Changing the Page <title>
You can find the source HTML file in the public folder of the generated project. You may edit the <title> tag in it to change the title from “React App” to anything else.

Note that normally you wouldn’t edit files in the public folder very often. For example, adding a stylesheet is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser document.title API. For more complex scenarios when you want to change the title from React components, you can use React Helmet, a third party library.

If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in this section. Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered here.

Installing a Dependency
The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with npm:

npm install --save <library-name>
Importing a Component
This project setup supports ES6 modules thanks to Babel.
While you can still use require() and module.exports, we encourage you to use import and export instead.

For example:

Button.js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
DangerButton.js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
Be aware of the difference between default and named exports. It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use export default Button and import Button from './Button'.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

When to use the curly braces?
Exploring ES6: Modules
Understanding ES6: Modules
Adding a Stylesheet
This project setup uses Webpack for handling all assets. Webpack offers a custom way of “extending” the concept of import beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to import the CSS from the JavaScript file:

Button.css
.Button {
  padding: 20px;
}
Button.js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
This is not required for React but many people find this feature convenient. You can read about the benefits of this approach here. However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified .css file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into src/index.css. It would still be imported from src/index.js, but you could always remove that import if you later migrate to a different build tool.

Post-Processing CSS
This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.

For example, this:

.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
becomes this:

.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
If you need to disable autoprefixing for some reason, follow this section.

Adding a CSS Preprocessor (Sass, Less etc.)
Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit).

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative.

First, let’s install the command-line interface for Sass:

npm install node-sass --save-dev
Then in package.json, add the following lines to scripts:

   "scripts": {
+    "build-css": "node-sass src/ -o src/",
+    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
Note: To use a different preprocessor, replace build-css and watch-css commands according to your preprocessor’s documentation.

Now you can rename src/App.css to src/App.scss and run npm run watch-css. The watcher will find every Sass file in src subdirectories, and create a corresponding CSS file next to it, in our case overwriting src/App.css. Since src/App.js still imports src/App.css, the styles become a part of your application. You can now edit src/App.scss, and src/App.css will be regenerated.

To share variables between Sass files, you can use Sass imports. For example, src/App.scss and other component style files could include @import "./shared.scss"; with variable definitions.

At this point you might want to remove all CSS files from the source control, and add src/**/*.css to your .gitignore file. It is generally a good practice to keep the build products outside of the source control.

As a final step, you may find it convenient to run watch-css automatically with npm start, and run build-css as a part of npm run build. You can use the && operator to execute two scripts sequentially. However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

npm install --save-dev npm-run-all
Then we can change start and build scripts to include the CSS preprocessor commands:

   "scripts": {
     "build-css": "node-sass src/ -o src/",
     "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
Now running npm start and npm run build also builds Sass files. Note that node-sass seems to have an issue recognizing newly created files on some systems so you might need to restart the watcher when you create a file until it’s resolved.

Adding Images and Fonts
With Webpack, using static assets like images and fonts works similarly to CSS.

You can import an image right in a JavaScript module. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

Here is an example:

import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

.Logo {
  background-image: url(./logo.png);
}
Webpack finds all relative module references in CSS (they start with ./) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

It is not required for React but many people enjoy it (and React Native uses a similar mechanism for images).
An alternative way of handling static assets is described in the next section.

Using the public Folder
Note: this feature is available with react-scripts@0.5.0 and higher.

Changing the HTML
The public folder contains the HTML file so you can tweak it, for example, to set the page title. The <script> tag with the compiled code will be added to it automatically during the build process.

Adding Assets Outside of the Module System
You can also add other assets to the public folder.

Note that we normally encourage you to import assets in JavaScript files instead. For example, see the sections on adding a stylesheet and adding images and fonts. This mechanism provides a number of benefits:

Scripts and stylesheets get minified and bundled together to avoid extra network requests.
Missing files cause compilation errors instead of 404 errors for your users.
Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.
However there is an escape hatch that you can use to add an asset outside of the module system.

If you put a file into the public folder, it will not be processed by Webpack. Instead it will be copied into the build folder untouched. To reference assets in the public folder, you need to use a special variable called PUBLIC_URL.

Inside index.html, you can use it like this:

<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
Only files inside the public folder will be accessible by %PUBLIC_URL% prefix. If you need to use a file from src or node_modules, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run npm run build, Create React App will substitute %PUBLIC_URL% with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use process.env.PUBLIC_URL for similar purposes:

render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
Keep in mind the downsides of this approach:

None of the files in public folder get post-processed or minified.
Missing files will not be called at compilation time, and will cause 404 errors for your users.
Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.
When to Use the public Folder
Normally we recommend importing stylesheets, images, and fonts from JavaScript. The public folder is useful as a workaround for a number of less common cases:

You need a file with a specific name in the build output, such as manifest.webmanifest.
You have thousands of images and need to dynamically reference their paths.
You want to include a small script like pace.js outside of the bundled code.
Some library may be incompatible with Webpack and you have no other option but to include it as a <script> tag.
Note that if you add a <script> that declares global variables, you also need to read the next section on using them.

Using Global Variables
When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the window object, for example:

const $ = window.$;
This makes it obvious you are using a global variable intentionally rather than because of a typo.

Alternatively, you can force the linter to ignore any line by adding // eslint-disable-line after it.

Adding Bootstrap
You don’t have to use React Bootstrap together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

npm install react-bootstrap --save
npm install bootstrap@3 --save
Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your src/index.js file:

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
Import required React Bootstrap components within src/App.js file or your custom component files:

import { Navbar, Jumbotron, Button } from 'react-bootstrap';
Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example App.js redone using React Bootstrap.

Using a Custom Theme
Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package).
We suggest the following approach:

Create a new package that depends on the package you wish to customize, e.g. Bootstrap.
Add the necessary build steps to tweak the theme, and publish your package on npm.
Install your own theme npm package as a dependency of your app.
Here is an example of adding a customized Bootstrap that follows these steps.

Adding Flow
Flow is a static type checker that helps you write code with fewer bugs. Check out this introduction to using static types in JavaScript if you are new to this concept.

Recent versions of Flow work with Create React App projects out of the box.

To add Flow to a Create React App project, follow these steps:

Run npm install --save-dev flow-bin (or yarn add --dev flow-bin).
Add "flow": "flow" to the scripts section of your package.json.
Run npm run flow -- init (or yarn flow -- init) to create a .flowconfig file in the root directory.
Add // @flow to any files you want to type check (for example, to src/App.js).
Now you can run npm run flow (or yarn flow) to check the files for type errors. You can optionally use an IDE like Nuclide for a better integrated experience. In the future we plan to integrate it into Create React App even more closely.

To learn more about Flow, check out its documentation.

Adding Custom Environment Variables
Note: this feature is available with react-scripts@0.2.3 and higher.

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have NODE_ENV defined for you, and any other environment variables starting with REACT_APP_.

The environment variables are embedded during the build time. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, just like described here. Alternatively you can rebuild the app on the server anytime you change them.

Note: You must create custom environment variables beginning with REACT_APP_. Any other variables except NODE_ENV will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

These environment variables will be defined for you on process.env. For example, having an environment variable named REACT_APP_SECRET_CODE will be exposed in your JS as process.env.REACT_APP_SECRET_CODE.

There is also a special built-in environment variable called NODE_ENV. You can read it from process.env.NODE_ENV. When you run npm start, it is always equal to 'development', when you run npm test it is always equal to 'test', and when you run npm run build to make a production bundle, it is always equal to 'production'. You cannot override NODE_ENV manually. This prevents developers from accidentally deploying a slow development build to production.

These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined in the environment inside a <form>:

render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
During the build, process.env.REACT_APP_SECRET_CODE will be replaced with the current value of the REACT_APP_SECRET_CODE environment variable. Remember that the NODE_ENV variable will be set for you automatically.

When you load the app in the browser and inspect the <input>, you will see its value set to abcdef, and the bold text will show the environment provided when using npm start:

<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
The above form is looking for a variable called REACT_APP_SECRET_CODE from the environment. In order to consume this value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a .env file. Both of these ways are described in the next few sections.

Having access to the NODE_ENV is also useful for performing actions conditionally:

if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
When you compile the app with npm run build, the minification step will strip out this condition, and the resulting bundle will be smaller.

Referencing Environment Variables in the HTML
Note: this feature is available with react-scripts@0.9.0 and higher.

You can also access the environment variables starting with REACT_APP_ in the public/index.html. For example:

<title>%REACT_APP_WEBSITE_NAME%</title>
Note that the caveats from the above section apply:

Apart from a few built-in variables (NODE_ENV and PUBLIC_URL), variable names must start with REACT_APP_ to work.
The environment variables are injected at build time. If you need to inject them at runtime, follow this approach instead.
Adding Temporary Environment Variables In Your Shell
Defining environment variables can vary between OSes. It’s also important to know that this manner is temporary for the life of the shell session.

Windows (cmd.exe)
set REACT_APP_SECRET_CODE=abcdef&&npm start
(Note: the lack of whitespace is intentional.)

Linux, macOS (Bash)
REACT_APP_SECRET_CODE=abcdef npm start
Adding Development Environment Variables In .env
Note: this feature is available with react-scripts@0.5.0 and higher.

To define permanent environment variables, create a file called .env in the root of your project:

REACT_APP_SECRET_CODE=abcdef
These variables will act as the defaults if the machine does not explicitly set them.
Please refer to the dotenv documentation for more details.

Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need these defined as well. Consult their documentation how to do this. For example, see the documentation for Travis CI or Heroku.

Can I Use Decorators?
Many popular libraries use decorators in their documentation.
Create React App doesn’t support decorator syntax at the moment because:

It is an experimental proposal and is subject to change.
The current specification version is not officially supported by Babel.
If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.
However in many cases you can rewrite decorator-based code without decorators just as fine.
Please refer to these two threads for reference:

#214
#411
Create React App will add decorator support when the specification advances to a stable stage.

Integrating with an API Backend
These tutorials will help you to integrate your app with an API backend running on another port, using fetch() to access it.

Node
Check out this tutorial. You can find the companion GitHub repository here.

Ruby on Rails
Check out this tutorial. You can find the companion GitHub repository here.

Proxying API Requests in Development
Note: this feature is available with react-scripts@0.2.3 and higher.

People often serve the front-end React app from the same host and port as their backend implementation.
For example, a production setup might look like this after the app is deployed:

/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation
