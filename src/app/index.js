import generator from 'yeoman-generator';
import mkdirp from 'mkdirp';
import path from 'path';
import yosay from 'yosay';
import { forEach, set } from 'lodash';


/**
 * Personalizes the generator.
 * @module generator
 */
module.exports = generator.extend({
  /**
   * Says welcome to the user. Uses yosay to be beautiful.
   * Creates an object to store user's answers.
   * @return {String} welcome message
   */
  initializing() {
    this.log(yosay('Welcome!'));
    this.answers = {};
  },
  /**
   * List of questions to cutum the building module. Then, it sets generator's properties.
   * @return {Array} Inputs
   */
  prompting() {
    return this.prompt([{
      name: 'projectName',
      message: '(1/6) What\'s your project\'s name?'
    }, {
      name: 'projectDescription',
      message: '(2/6) Enter a description:'
    }, {
      name: 'userName',
      message: '(3/6) What\'s your name'
    }, {
      name: 'userMail',
      message: '(4/6) What\'s your email?'
    }, {
      name: 'repoType',
      type: 'list',
      choices: ['git', 'gitLab', 'bitbucket', 'coding'],
      message: 'What\'s you repository type?'
    }, {
      name: 'repoURL',
      message: 'Your URL repo:'
    }])
      .then(answers => forEach(answers, (value, key) => set(this.answers, key, value)));
  },
  // Creates the .yo-rc.json
  configuring() {
    this.config.save();
  },
  /**
   * Creates folder's project and set the destination's root path.
   * @return {Void} The project's folder.
   */
  defaults() {
    if (path.basename(this.destinationPath()) !== this.answers.projectName) {
      mkdirp(`../${this.answers.projectName}`);
      this.destinationRoot(this.destinationPath(`../${this.answers.projectName}`));
    }
  },
  /**
   * Creates the new project.
   * @return {Void} The new project.
   */
  writing() {
    // racines files.
    ['app.js', '.gitignore'].forEach((fileName) => {
      this.log(this.sourceRoot());
      this.log(fileName);
      this.fs.coptyTpl(
        this.templatePath(fileName),
        this.destinationPath(fileName)
      );
    });
    // files prefixed by _
    ['package.json', 'README.md'].forEach(fileName => this.fs.coptyTpl(
      this.templatePath(`_${fileName}`),
      this.destinationPath(fileName),
      this.props
    ));
  },
  /**
   * When the user has answer all the inputs, return responses. Uses yosay to be beautiful.
   * @return {String} Answers
   */
  end() {
    this.log(yosay(`See you soon ${this.answers.userName}`));
  }
});
