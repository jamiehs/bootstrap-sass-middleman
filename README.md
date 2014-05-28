# Bootstrap - Sass - Middleman

A collection of libraries and helpers to quickly set up a Bootstrap and Middleman site.

#### Includes:
* Bootstrap 3
* jQuery
* Sass + Compass
* Modernizer.js
* Respond.js
* Holder.js
* HTML5 Shiv
* Heroku push/deploy support


You can customize the Bootstrap configuration by editing: `source/css/bootstrap/_bootstrap.scss` and `source/css/bootstrap/_variables.scss`
This is the easiest way that I have found to quickly set up a static site with Bootstrap, Sass, Compass, and Middleman.


## Usage
* Clone the repository
* Run `bundle install` to install all the required gems.
* Run `middleman` to start the server and then create your HTML/CSS!
* [Push to Heroku](https://devcenter.heroku.com/articles/git) if desired, and it should [build on the server](http://randomerrata.com/post/56163474367/middleman-on-heroku) when pushed!


## Changelog

* 2014-05-28 -
Added a Ruby version to the Gemfile.

* 2014-03-13 -
Added Heroku build support thanks to [This article on randomerrata.com](http://randomerrata.com/post/56163474367/middleman-on-heroku)

* 2014-03-12 -
Added [holder.js](http://imsky.github.io/holder/) to the `source/js/vendor` directory for mocking up quick images with no HTTP requests.
