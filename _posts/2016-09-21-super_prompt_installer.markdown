---
layout: post
title:  "Super Prompt Installer"
date:   2016-09-21 04:21:50 +0000
---


Sometimes one project leads to another. I coded the first version of [`Super Prompt`](https://github.com/lair001/super-prompt) in July when I returned to [`POSIX`](https://en.wikipedia.org/wiki/POSIX) after a 12 year hiatus when I tried [`Ubuntu MATE`](https://en.wikipedia.org/wiki/Ubuntu_MATE).  Frankly, I found [`Ubuntu`](https://en.wikipedia.org/wiki/Ubuntu_(operating_system))'s default prompt for its [`Bash`](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) shell rather unappealing.  It is ugly and doesn't provide the user with much information.  The prework for [`Viking Code School`](https://www.vikingcodeschool.com/web-development-basics/configure-your-command-line) introduced me to `Bash` prompt customization.  Soon I was scouring guides like this [one](http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html) on `nixCraft` and posts on [`Stack Exchange`](https://en.wikipedia.org/wiki/Stack_Exchange) for information, tricks and ideas regarding Bash prompts.  After a few days, I was quite happy with my `Super Prompt` and then moved on.

`Super Prompt` resurfaced on my radar when I began working on [`Quick Ticker`](https://github.com/lair001/stocks-cli-gem) for my [`CLI Data Gem Assessment`](https://learn.co/lessons/cli-data-gem-assessment) on `Learn`.  I had been comfortably been using the [`Learn IDE`](https://learn.co/lessons/your-integrated-development-environment) under [`Windows 10`](https://en.wikipedia.org/wiki/Windows_10) for over month, but I wanted to work on my own `Ubuntu`-based development environment for major projects.  I quickly found out that [`git`](https://en.wikipedia.org/wiki/Git) does not automatically append the current `git branch` to the present working directory (PWD) so I promptly found a [`parse_git_branch`](https://coderwall.com/p/fasnya/add-git-branch-name-to-bash-prompt) function and modified it to suit `Super Prompt`.

While working on a [`gemspec`](https://en.wikipedia.org/wiki/RubyGems) file so I could publish `Quick Ticker` to [`RubyGems`](https://rubygems.org), I discovered that [`Ruby`](https://www.ruby-lang.org/en/) will let the shell interpret anything enclosed by backtics.  This proved quite handy when generating an [array of files](https://github.com/lair001/qticker-1.0.5-production/blob/master/qticker.gemspec) to include in the gem build.

With `Super Prompt` fresh on my mind, I started to think of a way to exploit this to build an installer for `Super Prompt`.  First, I built a `Bash` [script](https://github.com/lair001/super-prompt/blob/master/lib/super_prompt.sh) that successfully installed `Super Prompt`.  Next came a [`Rake`](https://rubygems.org/gems/rake) [task](https://github.com/lair001/super-prompt/blob/master/Rakefile).  However, I figured that I could make installation of `Super Prompt` even easier by publishing an installer on `RubyGems`.  Afterall, `Super Prompt` is most likely to appeal to people new to `Bash` and casual users as power users tend to quickly write their own `Bash` prompts.

After writing a short `Ruby` [script](https://github.com/lair001/super-prompt/blob/master/bin/super_prompt) and a [`gemspec`](https://github.com/lair001/super-prompt/blob/master/bin/super_prompt), the [`super_prompt`](https://rubygems.org/gems/super_prompt) gem was born.  Installing `Super Prompt` is now as easy as running `gem install super_prompt` followed by `super_prompt`.  Will this bring `Super Prompt` to the masses?  We'll see!

By the way, the `Ruby` script needed to know its installation directory in order to copy `.super_prompt`.  `Quick Ticker` reared its head one last time.

You can find the `super_prompt` gem [here](https://rubygems.org/gems/super_prompt).
