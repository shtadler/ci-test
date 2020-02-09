const core = require('@actions/core');

try {
  core.setOutput("cool_message", 'HIII MYYYYCOOOLLL 1231242341!!!');
} catch (error) {
  core.setFailed(error.message);
}