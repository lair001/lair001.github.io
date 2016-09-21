---
layout: post
title:  "Quick Ticker"
date:   2016-09-21 00:16:47 +0000
---


Equity ownership is a key part of any long term investment strategy.  To help investors gather information on stocks and exchange traded funds (ETFs) that they either own or are considering for purchase, I coded and published [`Quick Ticker`](https://rubygems.org/gems/qticker) last week.  Written in [`Ruby`](https://www.ruby-lang.org/en/) and using [`Nokogiri`](https://rubygems.org/gems/nokogiri), `Quick Ticker` is a command line interface (CLI) gem that scrapes [`Google Finance`](https://www.google.com/finance).

The interface is clean and intuitive. The user simply types `qticker` at a `Bash` shell prompt.  The gem welcomes the user and asks for a ticker symbol.  Once the user enters a valid ticker symbol for a stock or an ETF, the user is presented with a quote and a list menu allowing the user to either display a company (or fund) description, enter another ticker symbol or exit the program.  This normal flow can be interrupted by entering `DEV` at the ticker symbol prompt.  This takes the user into `Development Mode` which presents the user with a list of fixtures to load for debugging purposes.

I learned a lot while developing and deploying this CLI gem.  I had to use `Google Chrome` to study the `HTML` of the `Google Finance` summary page and devise `CSS` selectors that would allow `Nokogiri` to scrape the data needed to build a quote and a company description.  At the end of this first stage, I had a method in my Scraper class that contained a lot of data that I didn't know what to do with.

In the next stage, I devised a strategy to organize the scraped data.  Stocks would have many attributes such as a Quote and a Description and each attribute would belong to a Stock.  I decided that a Stock would keep some of the data, such as ticker symbol, company name, and exchange, that would be used to create a header at the top of each display.  A quote would received data particular to displaying a quote, and a Description would receive data particular to displaying a description.  

It one thing to have a plan for organizing the data.  It was another to actually get the data out of my Scraper's method and into the approriate objects.  I recalled from lessons at [`Learn`](https://https://learn.co/lessons/welcome-to-learn-verified) (the online campus of [`Flatiron School`](https://flatironschool.com/)) that a hash can be used to mass assign variables.  Futhermore, the `attr_accessor` metaprogramming function can dynamically create reader and writer functions for class variables if it is placed in an `each loop` acting on a hash.

The path was clear at this point.  I would package the data into a hash of hashes or a nested hash.  In other words, my Scraper's method would return a hash that contained a first hash comprising the data to be kept by the Stock, a second hash comprising data that would go to the Stock's Quote, and a third hash comprising data that would go to the Stock's Description.  The Stock would receive this nested hash and be responsible for creating its Quote and Description with the appropriate data.

Now I realized that I was creating a lightweight Object Relational Model (ORM).  The Stock and its Quote and Description were interrelated tables.  I created a Table superclass that contained the code for creating tables dynamically from hashes.  Under the Table class, there were Stock and StockAttr subclasses.  StockAttr contained the code for telling a stock's attributes (such as a Quote or a Description) that they belonged to a Stock.  Quote and Description were, of course, subclasses of StockAtrr.  Stock contained the code for populating its class variables with the appropriate hash and creating its Quote and Description using the proper hashes.  Stock, Quote, and Description each contained methods that displayed data specific to each class.

I thought that the rough part of the project was over, and I was wrong.  While developing the Cli class for the command line interface, I made the spontaneous decision to include `Developer Mode` so that the user may load fixtures for debugging if the user was interesting in extending or modifying the gem.  This turned the Cli into a Byzantine maze of flags to track whether the user was in `Developer Mode`.  I was receiving a good lesson as to why Object Oriented Programming (OOP) relies on inheritance and class hierarchies.

I decided to divide the CLI between a Cli superclasses and MainCli and DevCli subclasses.  MainCli would contain code particular to the main (or "normal") CLI while DevCli would contain code particular to `Developer Mode`.  Cli would contain code that was common to both modes.

There was just one "problem".  The CLI was working perfectly and I wanted to be able to easily rollback if my plan went horribly wrong.  Therefore, I created and checked out a new [`git`](https://git-scm.com/) branch with `git co -b cli`.  Thankfully, however, the redesign was successful, and I merged cli branch into the master branch in the end.

Writing a full set of automated unit tests in [`Rspec`](https://rubygems.org/gems/respec) was easy and inituitive for the most part.  However, I did need to learn how to test output to the dislay and how to program the test scripts to respond to `gets` prompts.  The last major issues were posed while attempting to publish to [`RubyGems`](https://rubygems.org).  I created a production clone of my development repository on GitHub since I needed to make some changes that I did not want for development.

Although [`Bundle.require`](https://rubygems.org/gems/bundler) and [`require_all`](https://rubygems.org/gems/require_all) are great tools for development, they will break a deployment.  I had to replace them with explicit `require` and `require_relative` statements for all required gems and files, and superclasses needed to be required before their subclasses.  For future projects, I will likely explicitly keep an executable and an environment file for development and then create separate executable and environment files for production.

Finally, I used `open-uri` to load the fixtures in `Development Mode`.  In order for this to work in production where different operating systems and version control managers may install the gem in different locations, I had to figure out how to grab the absolute path of the gem's installation directory.  I originally intended for `Development Mode` to aid development and maintenance, but it had a lot of upfront cost.  `Development Mode` was fun to make, but it would have been much easier to simply use a testing platform like `Rspec`.  I could have simply written `Rspec` tests that load the fixtures.

You can find `Quick Ticker` at [`RubyGems`](https://rubygems.org/gems/qticker) and [`GitHub`](https://github.com/lair001/stocks-cli-gem).  The version 1.0.5 production repository can be found [here](https://github.com/lair001/qticker-1.0.5-production).


