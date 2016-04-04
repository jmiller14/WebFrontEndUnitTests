# Web Frontend Unit Testing Mobiquity Practices

This repo contains two separate projects: One written
in React and one written in AngularJS.

This functions as a teaching tool, so it is heavily
commented. If you are updating the code, be sure to update
explanations in the comments as well and provide comments
for new code.

## Installation

Install nodejs and npm. I recommend using [`nvm`](https://github.com/creationix/nvm)
or [`asdf`](https://github.com/HashNuke/asdf) for managing
node version installations, but feel free to install it
from source or use a package manager like `brew`.

Once nodejs is installed, run `npm install` to install the
dependencies for the projects. Now you're ready to start
testing.

Once installation is complete, you can run `npm start` to
start the development server. This will link you to the
two apps which are running in the frontend.

Using the development server is not necessary --
particularly if you are just running tests and not actually
using the app -- but if you want to run the app and don't
want to use the development server you're on your own to
build and serve it.

## Running the apps

To run the apps, run the following command in the project root directory from the command prompt.

    $ npm start

## Before Getting Started

Before we can start writing unit tests for frontend web,
we need to understand the tools we will be using, why
we need them, and how to use them.

### What's with all the modules?
`devDependencies` include all tools required for local
development of the app as well as testing. `dependencies`
are required only to build the app.

#### Build Dependencies

* `angular`: for Angular :)
* `autoprefixer-loader`: Adds support for automatically prefixing css properties, so you don't have to.
* `babel-core`: Babel is a module for building JS to use
 ES2015/ES6/ES7 features. These are not always available on
 browsers/platforms but they are still nice to use
 sometimes, so we include babel as part of our building.
 The process babel performs of taking ES6+ JS and
 writing it out as ES5 is called "transpiling." Babel can
 also use *presets* to transpile code in a particular way.
* `babel-loader`: This will be used by webpack (disucssed
 later) to run babel to transpile or files.
* `babel-plugin-lodash`: `Lodash` is _great_, but it can bloat the project when you don't trim it down to what you use. This module does this or you automatically.
* `babel-preset-angular`: Babel preset for AngularJS
* `babel-preset-es2015`: Babel preset for ES2015 features
 like `const` and arrow functions.
* `babel-preset-react`: Babel preset for React/jsx.
* 'css-loader': Adds support for loading css files through Webpack.
* `es6-weak-map`: ECMAScript6 WeakMap polyfill
* `extract-text-webpack-plugin`: Allows Webpack loaders to collect their includes into a single file (such as for css).
* `html-loader`: Webpack loader that allows you to import
 HTML files as strings. This is handy for importing
 Angular templates.
* `ng-annotate-loader`: Webpack loader for ng-annotate.
 This takes `function (dependency) {}` declarations in
 Angular and turns them into `['dependency', function
 (dependency) {}]` declarations automatically for
 minification-proofing. We can write dependency injection
 more cleanly.
* `node-sass`: Sass compiler that is super fast.
* `react`: for React :)
* `react-dom`: also for React. It's a separate module for
 some reason.
* `sass-loader`: Because writing vanilla CSS makes developers cry.
* `style-loader`: Webpack loader for HTML styles (typically inline, but we're too clever for that).
* `webpack`: our build tool. This will take all of our
 source files, run it through our loaders, and emit a
 usable JS output file based on our configuration

#### Development/Testing Dependencies
* `angular-mocks`: handly library that helps with testing in
 AngularJS
* `chai`: included as a peer dependency of `chai-sinon`, this
 is an assertion library. This allows us to use chai
 assertions with sinon spies
* `connect`: for our development server
* `jasmine-core`: unit testing framework core
* `karma`: test runner. Uses a configuration file to prepare
 our files for testing and runs the tests
* `karma-babel-preprocessor`: used to run Babel on files
 prior to testing (may not need this because of webpack)
* `karma-chai-sinon`: exposes sinon globally in tests run
 by Karma
* `karma-jasmine`: exposes Jamsine functions such as
 `describe` and `it` globally in tests run by Karma
* `karma-phantomjs2-launcher`: runs our tests in the
 PhantomJS browser
* `karma-sourcemap-loader`: for writing sourcemaps for tests
 (currently not working)
* `karma-webpack`: allows us to use our webpack configuration
 to prepare files for tests run by Karma
* `react-hot-loader`: changes to files in the React project
 change the DOM automatically without a page reload
* `serve-static`: connect middleware for serving static files
 from our dev server
* `sinon`: for spies
* `sinon-chai`: peer dependency of `karma-chai-sinon`
* `webpack-dev-server`: runs webpack configuration as a
 server with live reload

### What about our own modules?
We also need to know about the files for our app:

* `index.js`: runs the dev server
* `shared-styles`: CSS that can be used by both apps, so we
 just put it in one spot
* `public`: folder that just has html to serve the app files.
 We should rarely need to touch this
* `ng`: The Angular app files
* `react`: The React app files

### Two apps in one?
For convenience, this project has two separate apps under
the `ng` and `react` directories. You will do all of your
work in one of these if you want to add features and tests.

## Testing the apps

AngularJS and React have somewhat different testing
philosophies, so their tools differ a bit. We can think of
them independently.

### Testing AngularJS (under `ng/`)
AngularJS was particularly built with testing in mind and
even has a library called `ngMocks` that simplifies a lot
of the headaches of testing -- particularly mocking, and
asynchronicity.

We use Karma as a _test runner_ for AngularJS. This is not
strictly necessary, but Karma makes it easy to transpile
all of our files and inject some useful global attributes
that we commonly use for testing.

There are a few files we should know about:

* karma.config.js: The Karma configuration. We define what
 testing frameworks we use and how files should be
 processed before running the tests
* webpack.config.js: Webpack configuration. Karma can use
 this to run `webpack` on our files. We also use this
 configuration file for the dev server.
* test.webpack.js: entry point for Karma test
 configuration. This does whatever work we need to
 bootstrap our tests including loading ngMocks and the
 module that we need to test, `ngculator`.

#### Running tests

To run the Angular tests, run the following command from the command prompt in the project root directory.

    $ npm run test-ng

### Suggestions for possible improvements
As this project is intended to be a teaching tool, certain functionality has not been implemented, and is waiting for _your_ pull request! If you can't think of anything, start with some of these suggestions. Have more than one good idea? Maybe leave a suggestion for the next person.

#### Order of Operations

The calculator currently does not respect order of operations, but instead simply performs the calculation based on the previous value and the inputted value. I would be much better if it respected the standard order of operations:

1. Parentheses
2. Functions
3. Exponent
4. Multiplication / Division
5. Addition / Subtraction

Note that this a little advanced.

#### Adding buttons

Looking for something pretty easy to implement? Add a button! Just create a module in the `ng/ngculator/buttons` directory, including the spec. Look at the existing examples. Make sure that the code coverage is 100% before you submit your pull request, or your work isn't complete.

### Testing React
TODO...
