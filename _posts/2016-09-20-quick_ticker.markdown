---
layout: post
title:  "Quick Ticker"
date:   2016-09-21 00:16:47 +0000
---


Equity ownership is a key part of any long term investment strategy.  To help investors gather information on stocks and exchange traded funds (ETFs) that they either own or are considering for purchase, I coded and published `Quick Ticker` last week.  Written in `Ruby` and using `Nokogiri`, `Quick Ticker` is a command line interface (CLI) gem that scrapes `Google Finance`.

The interface is clean and intuitive. The user simply types `qticker` at a `Bash` shell prompt.  The gem welcomes the user and asks for a ticker symbol.  Once the user enters a valid ticker symbol for a stock or an ETF, the user is presented with a quote and a list menu allowing the user to either display a company (or fund) description, enter another ticker symbol or exit the program.  This normal flow can be interrupted by entering `DEV` at the ticker symbol prompt.  This takes the user into `Development Mode` which presents the user with a list of fixtures to load for debugging purposes.

I learned a lot while developing and deploying this CLI gem.  I had to use `Google Chrome` to study the `HTML` of the `Google Finance` summary page and devise `CSS` selectors that would allow `Nokogiri` to scrape the data needed to build a quote and a company description.  At the end of this first stage, I had a method in my Scraper class that contained a lot of data that I didn't know what to do with.

In the next stage, I devised a strategy to organize the scraped data.  Stocks would have many attributes such as a Quote and a Description and each attribute would belong to a Stock.  I decided that a Stock would keep some of the data, such as ticker symbol, company name, and exchange, that would be used to create a header at the top of each display.  A quote would received data particular to displaying a quote, and a Description would receive data particular to displaying a description.  I recalled from lessons at `Learn` (the online campus of `Flatiron School`) that a hash can be used to mass assign variables, and that the `attr_accessor` metaprogramming function can dynamically create reader and writer functions for class variables if it is placed in an `each loop` acting on a hash.

The path was clear at this point.  I would package the data into a hash of hashes or a nested hash.  In other words, my Scraper's method would return a hash that contained a first hash comprising the data to be kept by the Stock, a second hash comprising data that would go to the Stock's Quote, and a third hash comprising data that would go to the Stock's Description.  The Stock would receive this nested hash and be responsible for creating its Quote and Description with the appropriate data.

Now I realized that I was creating a lightweight Object Relational Model (ORM).  The Stock and its Quote and Description were interrelated tables.  I created a Table superclass that contained the code for creating tables dynamically from hashes.  Under the Table class, there were Stock and StockAttr subclasses.  StockAttr contained the code for telling a stock's attributes (such as a Quote or a Description) that they belonged to a Stock.  Quote and Description were, of course, subclasses of StockAtrr.  Stock contained the code for populating its class variables with the appropriate hash and creating its Quote and Description using the proper hashes.  Stock, Quote, and Description each contained methods that displayed data specific to each class.

You would think the rough part of the project was over, and you would be wrong.

It one thing to have a plan for organizing the data.  It was another to actually get the data out of my Scraper's method and into the approriate objects.
