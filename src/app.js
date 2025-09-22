function main() {
  const message = "Hello, Node.js!";
  console.log(message);
  return message; // return for testing
}

if (require.main === module) {
  main();
}

module.exports = main;
//change 2 for pull request