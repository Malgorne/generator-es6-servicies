# generator-es6-servicies

Use this generator to start a basic express project. It generates basic back-end service for an API written in ES6. The new project will use:

* ES6: eslint & babel;

* automating: gulp;

* unit tests: sinon, chai, mocha;

* coverage: istanbul;

* documentation: jsdoc;

* and more: mongoose, lodash, husky...


## Before all...

Be sure [node v6](https://nodejs.org/en/download/), [mongoDB](https://docs.mongodb.com/manual/installation/), [gulp](http://gulpjs.com/) and [yeoman](http://yeoman.io/learning/index.html) are installed.

## Getting started to dev

Go to you dev folder. Clone the repo:

```
git clone git@github.com:Malgorne/generator-es6-servicies.git
cd generator-es6-servicies
```

The generator use yarn to download dependencies. Install yarn:

```
npm install -g yarn
```

To learn to use yarn, see [this page](https://yarnpkg.com/lang/en/docs/usage/).

## Installing

Currently, you can just use it localy.

Clone the repo:

```
git clone git@github.com:Malgorne/generator-es6-servicies.git
cd generator-es6-servicies
yarn install
gulp build
yarn link
```

## Getting started to use

```
yo generator-es6-servicies
```

Answer to the 6 prompts. It will build a new project in a new folder and install dependecies. You can go to your new project:

```
cd ../<youProject>
```

Now you have to compile your project ES6 to ES5.

```
yarn
```

## Tasks

### Default:

```
yarn
```

It will launch the tasks 'babel' and 'doc'.

### Babel:

```
yarn babel
```

It will compile your ES6 project to ES5 in a generators folder.

### Doc:

```
yarn doc
```

It will ready all jsdoc commentaries and build the doc in the doc folder.

### Test:

```
yarn test
```

It will launch the tasks 'lint' and 'unit-tests'.

### Lint:

```
gulp lint
```

It tests the code quality.

### Unit-tests:

```
gulp unit-tests
```

It launchs the unit's tests and build the report in the coverage folder.

### Cleanup:

```
yarn  cleanup
```

It removes the folders /doc, /generators, /coverage.

## Git hooks

For code quality, we have add a prepush hook. It launch the tasks 'test'. If the linter throw an error, if a unit-tests fail or if the coverage is not insured, the push is canceled.
