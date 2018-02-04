import Generator from 'yeoman-generator';
import mkdirp from 'mkdirp';
import path from 'path';
import yosay from 'yosay';
import { forEach, set, drop, replace } from 'lodash';


/**
 * Personalizes the generator.
 * @namespace generator
 * @class
 */
module.exports = class extends Generator {
  /**
   * @constructs generator
   * @description Is in charge to create options and arguments configuration.
   * @param {Object} args - Arguements passed to the generator.
   * @param {Object} options - options submitted by the user.
   */
  constructor(args, opts) {
    super(args, opts);
    this.argument('projectName', {
      type: String,
      required: false
    });

    this.option('pmYarn', {
      desc: 'Package manager: Yarn (default)',
      type: Boolean,
      default: true
    });
    this.option('pmNpm', {
      desc: 'Package manager: Npm (default: Yarn)',
      type: Boolean,
      default: false
    });
    this.option('pmBower', {
      desc: 'Package manager: Bower (default: Yarn)',
      type: Boolean,
      default: false
    });
  }

  /**
   * @function initializing
   * @memberof generator
   * @description Says welcome to the user. Uses yosay to be beautiful.
   * Creates an object to store user's answers.
   * @return {String} Welcome message
   */
  initializing() {
    this.answers = {};
    return this.log(yosay('Welcome!'));
  }

  /**
   * @function prompting
   * @memberof generator
   * @description Send prompts and store user's anwers.
   * @return {Void} Inputs
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
    const { projectName } = this.options;

    if (projectName) prompts = drop(prompts);
    forEach(prompts, (value, key) => {
      prompts[key].message = replace(value.message, 'XXX', key + 1);
      prompts[key].message = replace(value.message, 'YYY', prompts.length);
    });

    return this.prompt(prompts)
      .then((answers) => {
        forEach(answers, (value, key) => set(this.answers, key, value));
        if (projectName) set(this.answers, 'projectName', projectName);
      });
  }

  /**
   * @function configuring
   * @memberof generator
   * @description Creates the .yo-rc.json to save some user's answers.
   * @return {Void}
   */
  configuring() {
    this.config.save();
  }

  /**
   * @function defaults
   * @memberof generator
   * @description Creates folder's project and set the destination's root path.
   * @return {Void} The project's folder.
   */
  defaults() {
    const projectName = this.answers.projectName; // From answers.
    if (path.basename(this.destinationPath()) !== projectName) {
      mkdirp(`${this.options.projectName || projectName}`);
      this.destinationRoot(this.destinationPath(`${projectName}`));
    }
  }

  /**
   * @function writing
   * @memberof generator
   * @description Creates the new project.
   * @return {Void} The new project.
   */
  writing() {
    // root files.
    ['.gitignore', '.gitattributes', '.eslintrc', 'gulpfile.babel.js'].forEach(fileName => this.fs.copy(
        this.templatePath(fileName),
        this.destinationPath(fileName)
      ));
    // files prefixed by _
    ['package.json', 'README.md'].forEach(fileName => this.fs.copyTpl(
        this.templatePath(`_${fileName}`),
        this.destinationPath(fileName),
        this.answers
      ));
    // basic's folders
    ['src', 'tasks', 'tests'].forEach(folderName => this.fs.copyTpl(
        this.templatePath(folderName),
        this.destinationPath(folderName),
        this.answers
      ));
  }

  /**
   * @function end
   * @memberof generator
   * @description When the user has answer all the inputs, returns responses.
   * Updates dependencies and says goodbye. Uses yosay to be beautiful.
   * @return {String} Good bye message
   */
  end() {
    const { pmYarn, pmNpm, pmBower } = this.options;

    this.installDependencies({
      yarn: pmYarn,
      npm: pmNpm,
      bower: pmBower
    });
    return this.log(yosay(`See you soon ${this.answers.userName}`));
  }
};
