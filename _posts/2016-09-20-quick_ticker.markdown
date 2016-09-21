---
layout: post
title:  "Quick Ticker"
date:   2016-09-21 00:16:47 +0000
---


Equity ownership is a key part of any long term investment strategy.  To help investors gather information on stocks and exchange traded funds (ETFs) that they either own or are considering for purchase, I coded and published `Quick Ticker` last week.  Written in `Ruby` and using `Nokogiri`, `Quick Ticker` is a command line interface (CLI) gem that scrapes `Google Finance`.

The interface is clean and intuitive. The user simply types `qticker` at a `Bash` shell prompt.  The gem welcomes the user and asks for a ticker symbol.  Once the user enters a valid ticker symbol for a stock or an ETF, the user is presented with a quote and a list menu allowing the user to either display a company (or fund) description, enter another ticker symbol or exit the program.  This normal flow can be interrupted by entering `DEV` at the ticker symbol prompt.  This takes the user into `Development Mode` which presents the user with a list of fixtures to load for debugging purposes.

I learned a lot while developing and deploying this CLI gem.  I had to use `Google Chrome` to study the `HTML` of the `Google Finance` summary page and devise `CSS` selectors that would allow `Nokogiri` to scrape the data needed to build a quote and a company description.  At the end of this first stage, I had a method in my Scraper class that contained a lot of data that I didn't know what to do with.

In the next stage, I devised a strategy to organize the scraped data.  Stocks would have many attributes such as a Quote and a Description and each attribute would belong to a Stock.  I decided that a Stock would keep some of the data, such as ticker symbol, company name, and exchange, that would be used to create a header at the top of each display.  A quote would received data particular to displaying a quote, and a Description would receive data particular to displaying a description.

It one thing to have a plan for organizing the data.  It was another to actually get the data out of my Scraper's method and into the approriate objects.
