## Install dependencies

* Node 4.x.x
* Yarn

## Create the React app

* Follow https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc#.n6i3ktz2m

## Create a Restify server secured with Stormpath

* Follow:

## Serve the React app via Express

* Why separate servers? Separate concerns. React client better approximates architecture for native mobile.
* Follow https://stormpath.com/blog/build-a-react-app-with-user-authentication#profile-page
* Incorporate the tutorial implementation of react-stormpath into your create-react-app

## Heroku pipeline for continuous delivery

* RESTful server and database as one Heroku app
* React+Express as another Heroku app

## CircleCI config for continuous integration

## Design a database model with LucidChart

## Generate PostgreSQL bootstrap scripts

## Add Coveralls for test coverage analysis

## Use pg-restify for generating RESTful services

* Add the module
* Configure read, write, admin user groups in Stormpath
* Limit access on routes read=get, write=get/post/put, admin=get/post/put/delete

## Update React app to CRUD a resource

## Define a soft-delete service with Restify

* PATCH method to change deleted=true
* Update GET to only return deleted=false records
