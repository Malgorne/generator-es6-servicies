const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const { forEach, assign } = require('lodash');

const describedFiles = require('./files-descriptions');

describe('# generator-app', () => {
  // Answers to test.
  const answers = {
    projectName: 'myService',
    projectDescription: 'My unbelievable service.',
    userName: 'toto',
    userMail: 'toto@toto.fr',
    repoType: 'git',
    repoURL: 'https://github.com/toto/myService'
  };
  // Runs the yeoman test helper, with test answers.
  before(() => helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .toPromise()
  );

  // Checks it template's files are creating.
  forEach(describedFiles, fileCase =>
    it(`It ${fileCase.it}`, () =>
      assign(assert, { file: fileCase.files })
  ));

  it('package.json should constain user\'s answers', () => {
    const { projectName, projectDescription, userName, userMail, repoType, repoURL } = answers;

    assert.JSONFileContent('package.json', {
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
    });
  });
});
