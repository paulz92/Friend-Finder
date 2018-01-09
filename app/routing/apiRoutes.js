// ===============================================================================
// LOAD DATA
// require friends data, which is an array of objects with info for each friend
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // when user visits api/friends, display json format of all data from friends data
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // when user submits and posts to api friends, push the req.body from body parser
  // to the friends data array in json format
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
  });
}