/**
 * MK is a minimal generator for constructing components from template files
 * powered by inquirer
 */
'use strict';
var fs = require('fs-extra');
var inquirer = require('inquirer');


var questions = [
  {
    type: 'list',
    name: 'template',
    message: 'Which template would you like to use?',
    choices: ['component.js', 'container.js']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Name ❯',
    validate: function (value) {
      var pass = value.match(/^[a-zA-Z0-9_]*$/);
      if (pass) {
        return true;
      }

      return 'Please enter a valid name. i.e. ComponentName';
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your component ❯',
  },
  {
    type: 'confirm',
    name: 'styles',
    message: 'Create a styles.scss file?',
    default: false
  },
];

function build(name, description) {
  var dest = 'src/components/' + name + '/';
  var component_src = dest + 'index.js';
  fs.readFile(dest + 'index.js', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/COMPONENT_NAME/g, name).replace(/COMPONENT_DESCRIPTION/g, description);

    // another small piece of callback hell that will be resolved
    fs.writeFile(component_src, result, 'utf8', function (err) {
      if (err) return console.log(err);
      console.log('🔮 Converting template into real component');
    });
  });
}

inquirer.prompt(questions).then(function (answers) {
  var dest = 'src/components/' + answers.name;
  var template = 'internals/templates/' + answers.template;

  // only run the given function if there is no error
  const runOrDie = (func, error) => {
    if (error) return console.error(error);
    return func();
  }

  // append an asset filename onto our destination path
  const assetPath = (asset) => `${dest}/${asset}`;


  const stylesCreated = (e) =>
    runOrDie(() => {
      console.log('👠 Created styles.scss');
      build(answers.name, answers.description);
    }, e);

  const copyStyles = () =>
    answers.styles
      ? fs.outputFile(assetPath('styles.scss'), '', stylesCreated)
      : build(answers.name, answers.description);

  const templateCopied = (e) =>
    runOrDie(() => {
      console.log('🔨 Created index.js from component template');
      copyStyles();
    }, e);

  const copyTemplate = () =>
    fs.copy(template, assetPath('index.js'), templateCopied);

  const folderCreated = (e) =>
    runOrDie(() => {
      console.log(`💪 Created ${dest}`);
      copyTemplate();
    }, e);

  const createFolder = () =>
    fs.mkdirs(dest, folderCreated);

  createFolder();
});
