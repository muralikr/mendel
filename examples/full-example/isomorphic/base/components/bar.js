import * as Foo from './foo.js';

export function logMounted() {
    console.log("In bar " + Foo.getLogString());
}
