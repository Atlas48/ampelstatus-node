# Ampelstatus

A itty-bitty dependency-free module that provides status codes for use in CLI programs.

```js
import {inf,wrn,err} from "./ampelstatus.js"

inf("This function did GREAT!!");
wrn("Uh Oh! Something Happened!");
err("The program's dead. It's entirely your fault. I hope you're happy.");
```

## inf
Indicates an action has run successfully. 

## wrn
Indicates something has happened that could effect normal program function

## err
Indicates a fatal error.
