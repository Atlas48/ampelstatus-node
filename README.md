# Ampelstatus

A itty-bitty dependency-free module that provides status codes for use in CLI programs.

**DEPRECATED AND MERGED INTO [AMPELOG](ampelog)**

```js
const ast=require('./js/ampelstatus.js');

console.log(ast.inf+"This function did GREAT!!");
console.log(ast.wrn+"Uh Oh! Something Happened!");
console.log(ast.err+"The program's dead. It's entirely your fault. I hope you're happy.");
```

## inf
Indicates an action has run successfully. 

## wrn
Indicates something has happened that could effect normal program function

## err
Indicates a fatal error.
