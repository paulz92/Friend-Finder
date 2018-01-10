// creating an empty friends array
// array will be populated with a friends object from data handled in
// survey.html and post request in apiRoutes.js
// adding a few base friends for beginning based on tpb characters
var friendsArray = [
	{
    name: "Bubbles",
  	photo: "https://i.pinimg.com/736x/df/0e/fe/df0efec7e5d62bda338fcc8db896f485--funny-shit-hilarious.jpg",
  	scores: [4, 1, 3, 4, 1, 5, 4, 3, 2, 2]
	}, {
    name: "Julian",
  	photo: "https://memegenerator.net/img/images/600x600/15057006/julian-tpb.jpg",
  	scores:[3, 3, 2, 4, 1, 5, 3, 1, 5, 3]
	}, {
    name: "Ricky",
  	photo: "https://images.backstreetmerch.com/storeimages/trailer-park-boys-custom-domain/custom-page/ricky.jpg",
  	scores: [1, 5, 1, 5, 1, 5, 1, 1, 1, 5]
	}
];

// exporting for accessibility in apiRoutes.js file for get request on api/friends
module.exports = friendsArray;