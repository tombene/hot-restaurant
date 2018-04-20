# hot-restaurant

##Creat reservations
array of reservations
array of those on waiting list
5 tables available 
After 5 reservations we add it to the waiting list

##Create server



Instructions:

Phase I: For this first phase, aim to write out the pieces that will need to be programmed to create the functionality of your application. Try to break it into 6-7 pieces.
Instructors/TAs: Once time is up have students share their breakdowns. As a suggestion, here is a list that you can slack them.

Create the front-end (visuals) for home page, reservation form, and reservation views.

Create a basic server using Express.JS

Create a few array variables that will hold the data

Create a set of routes for getting and posting table data

Create a set of routes for displaying the HTML pages

Use jQuery to run AJAX calls to GET and POST data from users to the Express server

index page
--------------
Jumbotron -
shows view tables
make reservation
links to API table and wait list -

reserve page
--------------
Jumbotron - 
veiw tables
home
table input-
name, phone number, email, unique id
submit button
links to API table and wait list -

waitlist page
--------------
Jumbotron -
make reservation
home
current reservation table -
displays incoming data
waiting list -
displays incoming data
links to API table and wait list adn clear table option -

###Dependencies Include
NPM i express
npm i body-parser
require("path")
##GET
Changing page location
Resevations made
Those on waiting list
##POST
reservation
waiting list


