const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')

try {
  var htmllint = require('htmllint');
  const file = fs.readFileSync(process.cwd()+'/index.html')
  async function a(f) {
    const output = await htmllint(f);
    return output
  }
  
// Uses a default, global Linter instance.
  var output = file
  console.log(output)
} catch (error) {
  core.setFailed(error.message);
}
