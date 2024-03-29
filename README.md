# Ampelstatus

A itty-bitty dependency-free module that provides status codes for use in CLI programs.

# Examples
## Deno
```js
import {inf,wrn,err} from "https://deno.land/x/ampelstatus@v2.0.0/ampelstatus.ts"
```
# Node

First...

```sh
npm i ampelstatus
```

Then...

```js
import {inf,wrn,err} from "ampelstatus"
```

# Usage
```js
inf("This function did GREAT!!");
wrn("Uh Oh! Something Happened!");
err("The program's dead. It's entirely your fault. I hope you're happy.");
```

# Doc
## `inf`
Indicates an action has run successfully. 

## `wrn`
Indicates something has happened that could effect normal program function

## `err`
Indicates a fatal error.
