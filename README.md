# The algos-ts project

[![license](https://img.shields.io/github/license/alisianoi/algos-ts.svg)](https://choosealicense.com/licenses/mit/)

## What is the algos-js project?

This is a small project that contains several common computer science algorithms. It helps
me both learn TypeScript and practice these algorithms along the way.

The project has a few tests implemented with the [mocha][1] testing framework. Continuous
integration is done with [travis][2] and code coverage is available at [coveralls][3]. The
default package manager is [npm][6].

## How to install?

### Installing from GitHub

You would need to clone the project with `git` and install its dependencies with `npm`:

```
git clone https://github.com/alisianoi/algos-ts
cd algos-ts
npm install
```

## How to uninstall?

### After installing from GitHub

Remove the folder that you cloned from GitHub:

```rm -rf algos-ts```

## How to test?

To run all the unit tests:

```npm run test```

To run all the unit tests manually without the coverage report:

```./node_modules/mocha/bin/mocha --require ts-node/register --recursive test/**/*.ts```

To run unit tests for a specific module:

```./node_modules/mocha/bin/mocha --require ts-node/register test/test_fmath.ts```

## Miscellaneous

This project does not have an explicit "compile to JavaScript" step. Instead, the tests
rely on the `ts-node` package to compile and run TypeScript on the spot.


[1]: https://mochajs.org/
[2]: https://travis-ci.org
[3]: https://coveralls.io
[4]: https://git-scm.com/
[5]: https://github.com
[6]: https://npmjs.com/
