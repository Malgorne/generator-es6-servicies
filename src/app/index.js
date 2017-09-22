import Generator from 'yeoman-generator';
import mkdirp from 'mkdirp';
import path from 'path';
import yosay from 'yosay';
import { forEach, set, drop, replace } from 'lodash';


/**
 * Personalizes the generator.
 * @module generator
 */
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('projectName', { type: String, required: false });
  }
  /**
   * Says welcome to the user. Uses yosay to be beautiful.
   * Creates an object to store user's answers.
   * @return {String} welcome message
   */
  initializing() {
    this.log(yosay('Welcome!'));
    this.answers = {};
  }
  /**
   * List of questions to cutum the building module. Then, it sets generator's properties.
   * @return {Array} Inputs
   */
  prompting() {
    let prompts = [{
      name: 'projectName',
      message: '(XXX/YYY) What\'s your project\'s name?',
      default: 'newProject'
    }, {
      name: 'projectDescription',
      message: '(XXX/YYY) Enter a description:',
      default: 'A new project'
    }, {
      name: 'userName',
      message: '(XXX/YYY) What\'s your name',
      default: 'Parker Lewis'
    }, {
      name: 'userMail',
      message: '(XXX/YYY) What\'s your email?',
      default: 'myEmail@email.com'
    }, {
      name: 'repoType',
      type: 'list',
      message: '(XXX/YYY) What\'s you repository type?',
      default: 'git',
      choices: ['git', 'gitLab', 'bitbucket', 'coding']
    }, {
      name: 'repoURL',
      message: '(XXX/YYY) Your URL repo:',
      default: 'http://git.myproject.com'
    }];

    if (this.options.projectName) {
      prompts = drop(prompts);
    }

    forEach(prompts, (value, key) => {
      prompts[key].message = replace(value.message, 'XXX', key + 1);
      prompts[key].message = replace(value.message, 'YYY', prompts.length);
    });

    return this.prompt(prompts)
      .then((answers) => {
        forEach(answers, (value, key) => set(this.answers, key, value));
        if (this.options.projectName) {
          set(this.answers, 'projectName', this.options.projectName);
        }
      });
  }
  // Creates the .yo-rc.json
  configuring() {
    this.config.save();
  }
  /**
   * Creates folder's project and set the destination's root path.
   * @return {Void} The project's folder.
   */
  defaults() {
    if (path.basename(this.destinationPath()) !== this.answers.projectName) {
      mkdirp(`../${this.options.projectName ? this.options.projectName : this.answers.projectName}`);
      this.destinationRoot(this.destinationPath(`../${this.answers.projectName}`));
    }
  }
  /**
   * Creates the new project.
   * @return {Void} The new project.
   */
  writing() {
    // root files.
    ['.gitignore', '.gitattributes', '.eslintrc', 'gulpfile.babel.js'].forEach(fileName => this.fs.copy(
        this.templatePath(fileName),
        this.destinationPath(fileName)
      ));
    // files prefixed by _
    ['package.json', 'README.md'].forEach((fileName) => {
      this.fs.copyTpl(
        this.templatePath(`_${fileName}`),
        this.destinationPath(fileName),
        this.answers
      );
    });
    // folders
    ['src', 'tasks', 'tests'].forEach((folderName) => {
      this.fs.copyTpl(
        this.templatePath(folderName),
        this.destinationPath(folderName),
        this.answers
      );
    });
  }
  /**
   * When the user has answer all the inputs, return responses. Uses yosay to be beautiful.
   * @return {String} Answers
   */
  end() {
    this.yarnInstall();
    this.log(yosay(`See you soon ${this.answers.userName}`));
  }
};
