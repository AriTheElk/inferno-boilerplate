/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
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

  // try to ignore this little piece of callback hell
  // it will all be okay...
  fs.mkdirs(dest, function (err) {
    if (err) return console.error(err);
    console.log('💪 Created `' + dest + '`');
    fs.copy(template, dest + '/index.js', function (err) {
      if (err) return console.error(err);
      console.log('🔨 Created index.js from component template');
      if (answers.styles) {
        fs.outputFile(dest + '/styles.scss', '', function (err) {
          if (err) return console.error(err);
          console.log('👠 Created styles.scss');
          build(answers.name, answers.description);
        })
      } else {
        build(answers.name, answers.description);
      }
    });
  });
});
