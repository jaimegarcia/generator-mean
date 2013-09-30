'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MeanGenerator = module.exports = function MeanGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MeanGenerator, yeoman.generators.Base);

MeanGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

MeanGenerator.prototype.app = function app() {
  this.mkdir('build');
  this.mkdir('doc');
  this.mkdir('karma');
  this.mkdir('log');
  this.mkdir('src');
  this.mkdir('src/server');
  this.mkdir('src/server/app');
  this.mkdir('src/server/config');
  this.mkdir('src/server/common');
  this.mkdir('src/client');
  this.mkdir('src/client/app');
  this.mkdir('src/client/assets');
  this.mkdir('src/client/assets/images');
  this.mkdir('src/client/assets');
  this.mkdir('src/client/config');
  this.mkdir('src/client/common');

  this.template('index.html', 'index.html');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('Gruntfile.js', 'Gruntfile.js');
};

MeanGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
