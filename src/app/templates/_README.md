# <%= projectName %>

<%= projectDescription %>

## Before all...

Be sure [node v6](https://nodejs.org/en/download/), [mongoDB](https://docs.mongodb.com/manual/installation/), [gulp](http://gulpjs.com/) are installed.

## The tasks

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

## Getting Started

1- Clone the repo:

```
<%= repoType %> clone <%= repoURL %>
cd <%= projectName %>
```

2- Install dependencies:

```
yarn install
```

3- Build the project:

```
yarn build
```

4- To launch the server, you have to start mongodb, then:

```
yarn
```
## Git hooks

For code quality, we have add a prepush hook. It launch the tasks 'test'. If the linter throw an error, if a unit-tests fail or if the coverage is not insured, the push is canceled.
