const assert = require("assert");
const main = require("./app");

const output = main();
assert.strictEqual(output, "Hello, Node.js!");

console.log("✅ Test passed: output matches expected string");
