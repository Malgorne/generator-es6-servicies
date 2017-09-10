import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import path from 'path';
import { forEach, assign } from 'lodash';

import describedFiles from './files-descriptions';
import testJson from './tools.test.js';

describe('# generator-app without argument, with user answers', () => {
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
    it(`It ${fileCase.it}`, () => assign(assert, { file: fileCase.files })
  ));

  it('package.json should constain user\'s answers', () => testJson(answers));
});

describe('# generator-app with argument, with default values', () => {
  // Default values.
  const defaultAnswers = {
    projectDescription: 'A new project',
    userName: 'Parker Lewis',
    userMail: 'myEmail@email.com',
    repoType: 'git',
    repoURL: 'http://git.myproject.com'
  };
  // The argument.
  const projectName = 'myService';

  // Runs the yeoman test helper, with test answers.
  before(() => helpers.run(path.join(__dirname, '../generators/app'))
    .withArguments([projectName])
    .toPromise()
  );

  // Checks it template's files are creating.
  forEach(describedFiles, fileCase =>
    it(`It ${fileCase.it}`, () => assign(assert, { file: fileCase.files })
  ));

  it('package.json should constain user\'s answers', () => {
    assign(defaultAnswers, { projectName });
    testJson(defaultAnswers);
  });
});
