---
layout: post
title:  "Quick Ticker"
date:   2016-09-21 00:16:47 +0000
---


Equity ownership is a key part of any long term investment strategy.  To help investors gather information on stocks and exchange traded funds (ETFs) that they either own or are considering for purchase, I coded and published `Quick Ticker` last week.  Written in `Ruby` and using `Nokogiri`, `Quick Ticker` is a command line interface (CLI) gem that scrapes Google Finance.

The interface is clean and intuitive. The user simply types `qticker` at a `Bash` shell prompt.  The gem welcomes the user and asks for a ticker symbol.  Once the user enters a valid ticker symbol for a stock or an ETF, the user is presented with a quote and a list menu allowing the user to either display a company (or fund) description, enter another ticker symbol or exit the program.  This normal flow can be interrupted by entering `DEV` at the ticker symbol prompt.  This takes the user into `Development Mode` which presents the user with a list of fixtures to load for debugging purposes.
