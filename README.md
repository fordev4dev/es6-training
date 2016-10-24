# es6-training

## install

Run:

    npm install
    npm install -g http-server

## run

single run (compile & test once, useful for CI):

    npm test

development run (compile & test initially + for each file change, useful for development):

    gulp dev

## in-browser api

Make sure you installed `http-server` and run:

    npm run api

then open browser tab, open devtools console and start accessing the mocked API. 

## running single tests

You can temporarily adapt jasmine tests to run *only few specific tests* (one
or more) to save time, not to execute all the tests you have. In order to do
that, use [focused specs](http://jasmine.github.io/2.1/focused_specs.html):

 * replace `it()` with `fit()` **and/or**
 * replace `describe()` tiwh `fdescribe()`

Important thing, however, is **not to push** these temporary changes (`fit`,
`fdescribe`) to the repository.

## custom matchers

 * see [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers)

## progress

In the beginning, most of the tests are failing:

      Destructuring
        with Objects
          ×can be used to pull apart objects
          ×sets missing values to undefined
          ×can alias destructured variables
          ×can destructure nested variables
        with Arrays
          ×can be used to pull apart arrays
          ×can skip indexes in arrays
          ×can reach nested arrays

      Spread parameters
        ×should be able to call a function and spread the arguments
        ×should be easier to concatenate arrays
        ×can clone arrays

      Promises
        ×can be chained
        ×should resolve
        ×should reject
        ×errors can be caught

Your task is to learn ES6 and make tests pass. Eventually, tests should look more or less like the following:

      Destructuring
        with Objects
          √can be used to pull apart objects
          √sets missing values to undefined
          √can alias destructured variables
          √can destructure nested variables
        with Arrays
          √can be used to pull apart arrays
          √can skip indexes in arrays
          √can reach nested arrays

      Spread parameters
        √should be able to call a function and spread the arguments
        √should be easier to concatenate arrays
        √can clone arrays

      Promises
        √can be chained
        √should resolve
        √should reject
        √errors can be caught
