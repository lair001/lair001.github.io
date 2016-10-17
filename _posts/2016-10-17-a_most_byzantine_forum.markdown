---
layout: post
title:  "A Most Byzantine Forum"
date:   2016-10-17 05:28:39 +0000
---


Today, I am presenting my latest project that blends history with modern Web app technology: [`A Most Byzantine Forum`](https://github.com/lair001/a-most-byzantine-forum).  Built using [`Sinatra`](https://en.wikipedia.org/wiki/Sinatra_(software)), [`ActiveRecord`](http://guides.rubyonrails.org/active_record_basics.html) and [`Bootstrap`](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) and tested using [`Rspec`](https://en.wikipedia.org/wiki/RSpec) and [`Capybara`](https://en.wikipedia.org/wiki/Capybara_(software)), this project is huge jump from [`QuickTicker`](https://github.com/lair001/qticker) and [`Super Prompt`](https://github.com/lair001/super-prompt).  It also gives fans of the [Roman Empire](https://en.wikipedia.org/wiki/Roman_Empire) a platform to discuss their favorite Roman topics and to roleplay.

A Most Byzantine Forum is lightweight forum software themed after the late Roman Empire (retroactively renamed the [Byzantine Empire](https://en.wikipedia.org/wiki/Byzantine_Empire) by historians).  It is loosely modeled after [`XenoForo`](https://en.wikipedia.org/wiki/XenForo) forums like this [one](https://forum.paradoxplaza.com/forum/index.php).

The premise is simple.  Users can create an account.  Upon logging in, they are taken to a listing of threads.  By clicking on links consisting of a thread's title, they are taken to a listing of the thread's posts.  In this listing, the post's content and information about the user who created it is display.  By following a link consisting of a user's username, they can view the user's profile.  This profile contains information about the user's account along with a listing of all posts that the user has created.  They can also access a listing of all users through a navbar button.  
