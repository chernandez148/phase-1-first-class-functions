function receivesAFunction(cb) {
  console.log(cb());
}

receivesAFunction(function () {
  return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!";
});

function returnsANamedFunction() {
  return function name() {
    return "I'm a named function!";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "I'm an anonymous function!";
  };
}
