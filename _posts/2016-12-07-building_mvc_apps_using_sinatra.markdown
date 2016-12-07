---
layout: post
title:  "Building MVC Apps Using Sinatra"
date:   2016-12-07 02:36:42 +0000
---


In my blog [post](http://blog.samlair.com/2016/10/17/a_most_byzantine_forum) about `A Most Byzantine Forum`, I glossed over the problem of implementing Model-View-Controller (MVC) architecture in a Sinatra project.  Sinatra is fairly unopinionated regarding project architecture and does not even come with an Object Relational Mapping system.  Indeed, there is even a [classic Sinatra style](http://www.sinatrarb.com/intro.html#Modular%20vs.%20Classic%20Style) where an entire app consists of only a single file.

Of course, you probably want to go with Sinatra's modular style if your app isn't extremely simple.  However, even making this choice leaves your choices wide open.  For `A Most Byzantine Forum`, I took a MVC approach that ended a lot like Ruby on Rails, but I had to build nearly everything from scratch.

`A Most Byzantine Forum`'s [Gemfile](https://github.com/lair001/a-most-byzantine-forum/blob/master/Gemfile) provides a quick overview of the choices I made, which are very Rails-like.  ActiveRecord is the ORM and SQLite3 is the development database.  Tux provides a command line similar to Rails Console, and Shotgun allows changes to app to be reflected in a live run without restarting the server.  Authentication logic was crafted by hand around Bcrypt.

Similar to a command line gem, there is an [environment.rb](https://github.com/lair001/a-most-byzantine-forum/blob/master/config/environment.rb) file that requires the gems using Bundler and establishes a connection to the database.  This part is actually very simple compared to a Rails environment configuration, and highlights Sinatra's appeal as lightweight framework where you can only include what your project actually needs.  Like any Rack-based framework, the app is initiated by the (config.ru)[https://github.com/lair001/a-most-byzantine-forum/blob/master/config.ru] file.

You probably noticed that config.ru has bunch of `use` statements that are taking classes that I refer to as controllers as arguments followed by a `run` statement that takes `ApplicationController` as an argument.  What I am conceptualizing as controllers are technically Sinatra apps.  The server is running the `ApplicationController` app while the other apps are being used as middleware that intercepts some of the incoming HTTP requests.

A quick look at [application_controller.rb](https://github.com/lair001/a-most-byzantine-forum/blob/master/app/controllers/application_controller.rb) reveals that a Sinatra application is just a collection of route matchers attached to blocks.  The route matchers are very similar to what you would find in the routes.rb file in a Rails project.  The blocks are similar to Rails controller methods in that they typically perform basic CRUD actions and/or render views.  Sinatra does not support separation of the route matchers from the blocks so the Sinatra apps are the closest analog you will find for a controller in a Sinatra project.

Other than this distinction, the project is very Rails-like.  The database tables and models are just like any other ActiveRecord project.  The views are standard ERB.  I have yet to find time to do it, but it appears that you can even [integrate Sprockets](http://recipes.sinatrarb.com/p/asset_management/sprockets) into a Sinatra project and more or less reproduce the Asset Pipeline.

However, you will find that a growing Sinatra project will run into maintainability issues a lot faster than a comparable Rails application.  These issues drove me to experiment with reproducing some Rails conveniences like path and HTML helpers.  You can find most of these experiments in the [helpers folder](https://github.com/lair001/a-most-byzantine-forum/tree/master/app/helpers).  It is an open question as to how much Rails functionality you can reproduce before sacrificing Sinatra's advantages in performance and flexibility.  I plan to turn A Most Byzantine Forum into an ongoing effort to explore these issues.

Thanks for reading!

