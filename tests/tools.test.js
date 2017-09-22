import assert from 'yeoman-assert';
import { assign } from 'lodash';

module.exports = function testJson(inputs) {
  const { projectName, projectDescription, userName, userMail, repoType, repoURL } = inputs;

  assert.JSONFileContent('package.json', assign({}, {
    name: projectName,
    description: projectDescription,
    contributors: [{
      name: userName,
      email: userMail
    }],
    repository: {
      type: repoType,
      url: repoURL
    }
  }));
};
