const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  console.log(`Hello set`);
  core.setOutput("coll_message", 'Cool message!!!');
} catch (error) {
  core.setFailed(error.message);
}