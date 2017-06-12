import * as Bar from './bar.js';

export function logRender() {
    console.log("In foo");
    Bar.logMounted();
}

export function getLogString() {
    return "Test logs";
}
