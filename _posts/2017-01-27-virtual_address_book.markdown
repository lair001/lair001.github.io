---
layout: post
title:  "Virtual Address Book"
date:   2017-01-27 12:33:38 +0000
---


Today, I am presenting my lastest app, [Virtual Address Book](https://github.com/lair001/virtual-address-book), which is a contacts tracker built with an [AngularJS](https://angularjs.org/) front-end and a [Ruby on Rails](http://rubyonrails.org/) back-end.  It also uses [Angular Ui Router](https://github.com/angular-ui/ui-router).  The latter's inclusion had far more influence over how I structured the AngularJS-based front-end than I expected it to.

One of Angular Ui Router's biggest draws is how easy it makes it to implement nested views.  You simply set up a series of nested states (see this example from my [app](https://github.com/lair001/virtual-address-book/blob/master/app/assets/javascripts/angularApp/app.js)).  From there, you use a `<div ui-view></div>` directive to set where you want nested views to appear within a parent view.  There is a named ui-view system to support nesting multiple views in a parent simulaneously (see this [page](https://github.com/angular-ui/ui-router/wiki/Multiple-Named-views)).

This system is usually use to display more specific information based on the user's choice in a more general page.  For instance, Virtual Address Book displays the details of a specific contact chosen from a list of contacts.  However, it can also be used to implement nested layouts.  Virtual Address Book has an index view in which all other views are nested.  It also nests all visitor views within a visitor view.  All views presented to the user once signed in are nested within a signed in view.

It also allows you to set child controllers within parent controllers and share data from a parent with its children through the `$scope` service.  Vanilla AngularJS can do this as well, but you need to use `ng-controller` directives nested within `ng-controller` directives.  With Angular Ui Router, you can cleanly set everything up when declaring your states  (an example from my app is [here](https://github.com/lair001/virtual-address-book/blob/master/app/assets/javascripts/angularApp/app.js)).

Angular Ui Router also makes redirecting a snap.  Want to redirect to your `show` state after a successful edit?  Simply use `$state.go('show', {id: resource_id})`.  For instance, Virtual Address Book redirects to the contacts show state after successfully updating a contact.  Angular Ui Router also provides a convenient `$stateParams` service to access route parameters.  You can see both `$state` and `$stateParams` in [this](https://github.com/lair001/virtual-address-book/blob/master/app/assets/javascripts/angularApp/controllers/index/signed_in/contacts/ContactsShowController.js) example from Virtual Address Book.

That is all I have for now.  I hope my projects give some of you a little guidance or insight.  Thanks for reading.
