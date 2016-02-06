# Reduxr

The `reduxr` libraries are little utilities to help streamline Redux applications.

## Packages

- [reduxr-obj-actions](https://github.com/chrisdavies/reduxr-obj-actions) Automatically types action helpers and binds them to dispatch
- [reduxr-obj-reducer](https://github.com/chrisdavies/reduxr-obj-reducer) Removes boilerplate from reducers by converting objects into a reducer function
- [reduxr-reducer-helpers](https://github.com/chrisdavies/reduxr-reducer-helpers) A set of utility functions for dealing with common reducer data manipulations
- [reduxr-scoped-reducer](https://github.com/chrisdavies/reduxr-scoped-reducer) A helper function for scoping a reducer to actions that begin with a certain prefix
- [reduxr-async](https://github.com/chrisdavies/reduxr-async) Ajax helpers

## Example application

Look at `examples/todos` for a demonstration of `reduxr`. The `todos` example
is taken directly from the [redux](https://github.com/rackt/redux) repo.

[Here is a diff](https://github.com/chrisdavies/reduxr/commit/7b4b512dbc9533f91a14909438ed8ed3cea1bda8) showing the todos example before and after `reduxr` was integrated.

## Licence

MIT
