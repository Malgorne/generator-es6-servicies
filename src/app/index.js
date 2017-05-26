import generator from 'yeoman-generator';
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
      name: 'userName',
      type: 'input',
      message: 'What is your name?'
    }, {
      name: 'endpoint',
      type: 'input',
      message: 'Enter a enpPoint?'
    }]).then((answers) => {
      forEach(answers, (value, key) => set(this.answers, key, value));
    });
  },
  /**
   * When the user has answer all the inputs, return responses. Uses yosay to be beautiful.
   * @return {String} Answers
   */
  end() {
    this.log(yosay(`See you soon ${this.answers.userName} from ${this.answers.endpoint}`));
  }
});
