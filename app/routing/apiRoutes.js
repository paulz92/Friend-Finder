// load friends data
var friendsData = require("../data/friends.js");

// routing
module.exports = function(app) {
  // API GET request
  // when user visits api/friends, display json format of all data from friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request
  // when user submits and post to api friends occurs, push the req.body 
  // (aka the userData array built in survey.js) to the friends data array
  app.post("/api/friends", function(req, res) {
    // converting scores in req body to integers
    for (var i = 0; i < req.body.scores.length; i++) {
      req.body.scores[i] = parseInt(req.body.scores[i]);
    }
    // pushing req.body (now with numeric scores) to friendsData array
    friendsData.push(req.body);
  });
};