// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
	customerName: "Bob",
	customerPhone: "801.655.6555",
	customerEmail: "bob@bob.com",
	customerId: "uniqueid"
}];
var waitingList = [];
var remaining = 5;
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

// make reservation
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// show reservatios
app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
	

});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations,waitingList);
});

//Create New Reservations
app.post("/api/reservations", function(req,res){
	var newReservation = req.body;

	newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();
	newReservation.name = newReservation.phoneNumber.replace(/\s+/g, "").toLowerCase();
	newReservation.name = newReservation.email.replace(/\s+/g, "").toLowerCase();
	newReservation.name = newReservation.id.replace(/\s+/g, "").toLowerCase();
	console.log(newReservation);
	
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


  
