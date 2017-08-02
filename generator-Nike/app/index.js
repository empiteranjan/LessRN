'use strict';
const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends generators {

  initializing() {
    this.log('initializing');
  }

  prompting() {
    this.log('prompting');

    this.log(yosay(
      `Welcome to the ${chalk.red('NIKE')} ${chalk.blue('React Native Project')} generator!`
    ));

    const prompts = [{
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of the project you are creating.',
        default: 'NewProject'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  configuring() {
    this.log('configuring');
  }

  default() {
    this.log('default');
  }

  writing() {
    this.log('writing');

    this.log(yosay(
      `Running ${chalk.red('react-native init')}.  This may take a few minutes...`
    ));

    const done = this.async();
    this.spawnCommand('react-native', ['init', this.props.projectName]).on('close', done);

    // return new Promise((resolve, reject) => {
    //   this.log(yosay(
    //     `Running ${chalk.red('react-native init')}.  This may take a few minutes...`
    //   ));
    //   // this.spawnCommand('react-native', ['init', this.props.projectName]).on('close', () => {
    //   //   this.destinationRoot(`${this.destinationRoot()}/${this.props.projectName}`);
    //   // });
    // });
  }

  conflicts() {
    this.log('conflicts');
  }

  install() {
    this.log('conflicts');
    // Change working directory subfolder
    const npmdir = `${process.cwd()}/${this.props.projectName}`;
    process.chdir(npmdir);
    //this.installDependencies();
    this.yarnInstall(['redux', 'react-redux', 'redux-thunk', 'eslint-config-rallycoding', 'react-native-router-flux']);
  }

  end() {
    this.log('end');
    this.log(yosay(
      `Author ${chalk.red('Sameera Chathuranga')}, Website ${chalk.blue('www.vcoders.net')}`
    ));
  }
};
