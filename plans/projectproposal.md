# Capstone Project Proposal

Please complete this project proposal thoroughly so that your instructors can review it and have an intelligent conversation with you about requirements, scope, feasiblity, etc. Proposals will be due by the end of day on Friday before capstones start. If you don't have your idea fully fleshed out, complete the portions of this you can so that an instructor can help you flesh out the rest of your idea.

* [Requirements (flexible)](https://gist.github.com/matt-winzer/745abaadb509371dfee2a756c8da0c5e)

## CRUD
  Create:
  * User can manually add a new consumable via form in web app.
  Read:
  * Web App will display all consumables partitioned into Pantry or Refrigerator.
  Update:
  * User can manually update details and quantity of consumable via form in web app.
  Delete:
  * User can remove consumable via delete button in app.


## Project Description
My project will identify how many eggs you have in your fridge using Machine Learning and IOT technologies.

This project will be implemented in 5 phases with several steps in each phase.

__MVP__

Phase 1 - App / Database
  Techs:
  * App: React (or React Native)
  * Database / Server: Heroku, postgreSQL, Express, Knex 


  1. Build and deploy a database and server -- eggtracker API.
  2. Build a (VERY SIMPLE) mobile-optimized web app that will PULL from the eggtracker API.
  3. App displays quantity of eggs (and other consumables) based on manual user input.

Phase 2 - Machine Learning

  Techs: 
  * Machine Learning: TensorFlow.js(?), Python

  1. Implement TensorFlow.
  2. Write and train a machine learning algorithm to identify how many eggs are present in a static image of an egg carton.
  3. Update the number of eggs to in deployed eggtracker database (from Phase 1).


__STRETCH / FUTURE__

Phase 3 - IOT
  * Raspberry Pi: Python, ...Raspbian(?)

  1. Build a raspberry pi.
  2. Add a light sensor - light sensor will spool up polling on the Pi.
    1. Pi will be sleeping while light is off(?).
  2. Add a camera (USB web camera or onboard camera) that can take a picture of an egg carton.
  3. Raspberry Pi will be able to POST latest image to eggtracker API.

Phase 4 - Working Prototype
  Techs:
  * No New Techs(?)

  1. Integrate the image table in the API with TF algorithm to dynamically update the # of eggs in the carton.
    1. Possibly Jupiter(?).
  2. TF will update quantity of eggs in eggtracker database.

Phase 5 - More IOT...
  Techs:
  * Other IOT devices / sensors

  1. Track other consumables in the fridge or pantry!

Future Directions
  * Notification that warns me of my egg deficiency when I am near a grocery store.
  * Tracking items in Pantry
  * Incorporating UPC scanning


## Problem Statement
How many times have you gotten home from the store and loudly exclaimed, 'Oh shoot! I don't have any eggs (milk, or whatever else).' Basically, it is difficult to keep track of consumables, especially those that aren't used daily or those that are typically used very quickly. This can lead to lost time and frustration, but more impactful is food waste caused by replacing food that did not need to be replaced. 


## How will your project solve this problem?
For the purposes of my demo, I have chosen to track how many eggs there are in an egg carton. The goal is to write a machine learning algorithm that can take an image of a carton of eggs and correctly identify how many eggs are in the carton. This information - the quantity of eggs - will be sent to a database and made available to an app via an API. This app - a mobile or mobile-optimized web app - will display how many eggs you have, at a glance. This information will save you time, money and decrease food waste.


## 5 user stories (at least):

App
* As a user, I want to arrive on page
* As a user, I enjoy a clean intuitive mobile-optimized web or mobile app
* As a user, I want to see a button to go to the Fridge and Pantry
* As a user, I want to see when eggs were added last
* __C__ As a user, I want to be able to manually add new consumables
* __R__ As a user, I want to see a list of consumables
* __U__ As a user, I want to be able to manually update details of existing consumables
* __D__ As a user, I want to be able to manually delete a consumable

TensorFlow
* As a user, I want to see how many eggs I have available
* As a user, I want to see when the quantity of eggs was last updated by Pi

FUTURE
* As a user, I want to see a login page

## What technologies do you plan to use?

This does not need to be an exhaustive list. We want you to identify major technologies you will be using. This list may grow or shrink as your project progresses.

* Machine Learning: TensorFlow.js(?), Python
* Database / Server: Heroku, postgreSQL, Express, Knex 
* App: React (or React Native)
* IOT: Raspberry Pi, Python, ...Raspbian(?)



## ERD - Entity Relationship Diagram
<img width="454" alt="myfridge_erd" src="https://user-images.githubusercontent.com/35672748/45527496-3319ac80-b799-11e8-9e85-91ece11c939b.png">



## Wireframes
<img width="1003" alt="eggtracker_wireframe" src="https://user-images.githubusercontent.com/35672748/45527966-7c6afb80-b79b-11e8-9a62-eefae3cd87ec.png">


## SHTF
I'm totally going to be a TensorFlow expert in a week, but in the event of a horrible catastrophe, I will write an Alexa skill that I can tell, "Alexa, I'm using 2 eggs" which will then decrement the number of eggs in my eggtracker database.

