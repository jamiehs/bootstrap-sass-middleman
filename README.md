# Bootstrap/Sass/Middleman

A collection of libraries and helpers to quickly set up a Bootstrap and Middleman site.

#### Includes:
* Bootstrap 3
* jQuery
* Sass
* Modernizer.js
* Respond.js
* Holder.js
* HTML5 Shiv
* Heroku push/deploy support


## Requirements/Dependencies/Tech Used
This project requires OSX or Linux, with Ruby and a few gems. It may run on Windows, but this is untested.

### Ruby
Requires Ruby version 2.0 or greater. For details on installing Ruby (we suggest RVM), see [the RVM page](https://rvm.io/).


## Installation/Setup/Configuration
Once you have the Middleman gem installed and before you start working on the project, run:
```bash
$ cd {path_to_project}
$ bundle
```

This will install all the needed dependencies and gems listed in the `.Gemfile` to get you up and running with Middleman.


## Running Middleman
Since we are using Middleman, you need to run the server to view the page. Do do this run:

```bash
$ middleman
```

## Browsersync
Use Node.js to install Browsersync:
`npm install -g browser-sync`

Then use with Middleman running in another terminal tab:
`browser-sync start --proxy 'localhost:4567' --files source`

## Development
You can customize the Bootstrap configuration by editing: `source/css/bootstrap/_bootstrap.scss` and `source/css/bootstrap/_variables.scss`
This is the easiest way that I have found to quickly set up a static site with Bootstrap, Sass, and Middleman.

## Building/Deployment

To build the project, quit the server with `ctrl-c`
Then run:
```bash
$ middleman build
```
This will run the Middleman build task and generate all of the necessary files. The output of the build command will reside in a `tmp` directory at the root of the project.


## Deploying to Heroku

Add the remote to your working copy:
```bash
$ git remote add heroku git@heroku.com:app-name.git
```

Ensure you have the remote added to your working copy:
```bash
$ git remote -v
heroku  git@heroku.com:app-name.git (fetch)
heroku  git@heroku.com:app-name.git (push)

```

This should output the remotes of the project. One should be called `heroku` and point to the Heroku staging subdomain.

Use the following command to push to Heroku:
```bash
$ git push heroku master

```

## Changelog

* 2014-07-25 -
Removed the Ruby version from the Gemfile.

* 2014-05-28 -
Added a Ruby version to the Gemfile.

* 2014-03-13 -
Added Heroku build support thanks to [This article on randomerrata.com](http://randomerrata.com/post/56163474367/middleman-on-heroku)

* 2014-03-12 -
Added [holder.js](http://imsky.github.io/holder/) to the `source/js/vendor` directory for mocking up quick images with no HTTP requests.