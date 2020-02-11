const eslint = require("eslint");
// const github = require('@actions/github');
const core  = require("@actions/core")

const fakeData = {
  "after": "9f94be55fc934cf2d674a40b03979a584a848e80",
  "base_ref": null,
  "before": "79e892f79435b43e13801c799748258911004503",
  "commits": [
    {
      "author": {
        "email": "andrii_shtadler@epam.com",
        "name": "Andrii Shtadler",
        "username": "shtadler"
      },
      "committer": {
        "email": "andrii_shtadler@epam.com",
        "name": "Andrii Shtadler",
        "username": "shtadler"
      },
      "distinct": true,
      "id": "9f94be55fc934cf2d674a40b03979a584a848e80",
      "message": "sadasd",
      "timestamp": "2020-02-08T19:25:07+02:00",
      "tree_id": "2d400f57b14fcc54fa65699ffa9fb86424841ffe",
      "url": "https://github.com/shtadler/ci-test/commit/9f94be55fc934cf2d674a40b03979a584a848e80"
    }
  ]
};


class Linter {
  constructor() {
    this.filesForCheck = [];
  }

  addRules(rules) {
    this.rules = rules
  }

  execute() {
    if (this.getRules()) {
      const engine = new eslint.CLIEngine({
        rules: this.rules
      })

    const errors = engine.executeOnFiles(this.getFilesForCheck())
    core.setFailed(JSON.stringify(errors))
    
      //logic for eslint

      return true
    }

    return " No rules for executing"
  }

  addFilesForCheck(...files) {
    let tmp = [...this.filesForCheck
      , ...files];
    this.filesForCheck = [...tmp]
  }


  getFilesForCheck() {
    return this.filesForCheck
  }
  getRules() {
    return this.rules ? true : false
  }

}


let linter = new Linter();
linter.addRules({
  "semi": ["error", "always"],
  "quotes": ["error", "double"]
})
linter.addFilesForCheck("*.js");
linter.execute()

