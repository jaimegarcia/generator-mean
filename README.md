This is a work in progress


## Current folder structure


mean-boilerplate/
    |- dist/
    |   |- server/
    |   |   |- views/
    |   |- js/
    |   |- css/
    |   |- img/
    |- doc/
    |   |- server/
    |   |- client/
    |- bower_components/
    |- node_modules/
    |- log/
    |- src/
    |   |- server/
    |   |   |- <server logic>
    |   |   |- common/
    |   |   |   |- <reusable server code>
    |   |   |- config/
    |   |   |   |- <server configuration files>
    |   |   |- server.js
    |   |   |- server.spec.js
    |   |- client/
    |   |   |- <client logic>
    |   |   |- js/
    |   |   |   |- main.js
    |   |   |- css/
    |   |   |   |- <general static css files>
    |   |   |- img/
    |   |   |   |- <static image files>
    |   |   |- less/
    |   |   |   |- main.less
    |   |   |- sty/
    |   |   |   |- main.sty
    |   |   |- common/
    |   |   |   |- <reusable client code>
    |   |   |- config/
    |   |   |   |- <client configuration files>
    |   |   |   |- client.js
    |   |   |   |- client.spec.js
    |- bower.json
    |- build.config.json
    |- CHANGELOG.md
    |- Gruntfile.js
    |- LICENSE
    |- module.prefix
    |- module.suffix
    |- package.json
    |- README.md




# generator-mean [![Build Status](https://secure.travis-ci.org/jaimegarcia/generator-mean.png?branch=master)](https://travis-ci.org/jaimegarcia/generator-mean)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-mean from npm, run:

```
$ npm install -g generator-mean
```

Finally, initiate the generator:

```
$ yo mean
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
