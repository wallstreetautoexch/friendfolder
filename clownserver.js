
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var clowns = [
{
  name:"Heidi The Clown",
  photo:"https://s-media-cache-ak0.pinimg.com/736x/7e/75/14/7e7514c2cc2950bdca97d3bf1d8fb186.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  name:"Scary Clown",
  photo:"https://c1.staticflickr.com/8/7193/6828560886_8ff2f4cf40_b.jpg",
  scores:[
      1,
      2,
      4,
      3,
      3,
      3,
      3,
      4,
      4,
      4
    ]
},
{
  name:"Happy Clown",
  photo:"https://thumbs.dreamstime.com/z/female-fairy-clown-1578370.jpg",
  scores:[
      1,
      1,
      5,
      5,
      5,
      1,
      2,
      4,
      4,
      3
    ]
},
{
  name:"Movie Clown",
  photo:"https://s-media-cache-ak0.pinimg.com/originals/19/11/09/1911091c8cd90b87541ad8977ad332ae.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      2,
      2,
      2,
      5,
      1
    ]
},
{
  name:"Crazy Clown",
  photo:"https://s-media-cache-ak0.pinimg.com/564x/ea/41/73/ea4173efd5e7d9bb30fb14a02c6a0ddd.jpg",
  scores:[
      2,
      1,
      1,
      1,
      1,
      3,
      3,
      5,
      4,
      1
    ]
},
{
  name:"BOZO The Clown",
  photo:"http://a57.foxnews.com/images.foxnews.com/content/fox-news/entertainment/2010/08/24/did-bozo-clown-tell-lies-sleep/_jcr_content/par/featured-media/media-0.img.jpg/0/0/1421915665697.jpg?ve=1",
  scores:[
      5,
      1,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      1
    ]
},
{
  name:"Ugly Clown Clown",
  photo:"http://images.uncyc.org/pt/6/67/Bozo77.JPG",
  scores:[
      5,
      3,
      3,
      4,
      4,
      1,
      2,
      4,
      4,
      2
    ]
},
{
  name:"Your Uncle The Clown",
  photo:"https://s-media-cache-ak0.pinimg.com/736x/39/d3/0e/39d30e4e03b064f6a087dc545f1a4e86.jpg",
  scores:[
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      4,
      1
    ]
},
{
  name:"Pooch Clown",
  photo:"https://s-media-cache-ak0.pinimg.com/originals/0e/de/2a/0ede2a86428871c447d696cfc74e7514.jpg",
  scores:[
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      1
    ]
},
{
  name:"Political Clown",
  photo:"http://images.dailykos.com/images/160556/large/6saISltOjUmYpYoIuO8xXQ2.jpg?1440281403",
  scores:[
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      1
    ]
}
]

app.get("/", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "clownintro.html"));
});

app.get("/get-the-clowns", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "all-clowns.html"));
});	

app.get("/api/clownfriends", function(req, res) {
	res.json(clowns);
});

app.get("/clown-survey", function(req, res) {
	res.sendFile(path.join(__dirname, "clownsurvey.html"));
});


app.post("/add-prescription", function(req, res) {
	prescription.push(req.body)
	res.send(req.body);
});


app.listen(PORT, function() {
  console.log("App Honking on PORT " + PORT);
});









