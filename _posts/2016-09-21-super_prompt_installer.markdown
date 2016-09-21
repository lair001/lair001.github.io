---
layout: post
title:  "Super Prompt Installer"
date:   2016-09-21 04:21:50 +0000
---


Sometimes one project leads to another. I coded the first version of [`Super Prompt`](https://github.com/lair001/super-prompt) in July when I returned to `POSIX` after a 12 year hiatus when I tried `Ubuntu MATE`.  Frankly, I found `Ubuntu`'s default prompt for its `Bash` shell rather unappealing.  It is ugly and doesn't provide the user with much information.  The prework for [`Viking Code School`](https://www.vikingcodeschool.com/web-development-basics/configure-your-command-line) introduced me to `Bash` prompt customization.  Soon I was scouring guides like this [one on `nixCraft`](http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html) and posts on `Stack Exchange` for information, tricks and ideas regarding Bash prompts.  After a few days, I was quite happy with my `Super Prompt` and then moved on.

`Super Prompt` resurfaced on my radar when I began working on [`Quick Ticker`](https://github.com/lair001/stocks-cli-gem) for my [`CLI Data Gem Assessment`](https://learn.co/lessons/cli-data-gem-assessment) on `Learn`.  I had been comfortably been using the `Learn IDE` in `Windows 10` for over month but I wanted to work on my own `Ubuntu`-based development environment for major projects.  I quickly found out that `git` does not automatically append the current `git branch` to the present working directory (PWD) so I promptly found a `parse_git_branch` function and modified it to suit `Super Prompt`.

While working on a `gemspec` file so I could publish `Quick Ticker` to `RubyGems`, I discovered that `Ruby` will let the shell interpret anything enclosed by backtics.  This proved quite handy [when generating an array of files](https://github.com/lair001/qticker-1.0.5-production/blob/master/qticker.gemspec) to include in the gem build.

With `Super Prompt` fresh on my mind, I started to think of a way to exploit this to build an installer for `Super Prompt`.  First, I built a [`Bash` script](https://github.com/lair001/super-prompt/blob/master/lib/super_prompt.sh) that successfully installed `Super Prompt`.
