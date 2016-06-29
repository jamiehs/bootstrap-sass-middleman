# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem "middleman", "~>4.1.9"
gem "middleman-blog"
# gem "middleman-compass"
gem "middleman-sprockets", "~> 4.0.0.rc.1"
gem 'middleman-autoprefixer'

# Live-reloading plugin
gem "middleman-livereload", "~> 3.4.3"
# Middleman Deeploy gem - https://github.com/tvaughan/middleman-deploy
gem "middleman-deploy", "~> 2.0.0.pre.alpha"

#Please add the following to your Gemfile to avoid polling for changes:
require 'rbconfig'
  if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
    gem 'rb-fsevent', '<= 0.9.4'
  end

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

gem "rack-contrib", :platforms => [:ruby]
gem "puma", :platforms => [:ruby]
