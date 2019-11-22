//javascript, jQuery - sample code from Giphy API site
// 2
// 3var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9tPmQXukCEVIORN4YM6PUQloQ0OiWlC3");
// 4xhr.done(function(data) { console.log("success got data", data); });



var verb = "happy";

console.log("Im working")

// queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9tPmQXukCEVIORN4YM6PUQloQ0OiWlC3&q= + verb + &limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

var object = [];
var emotion = [];
var place = [];

$("#search-button").on("click", function(event) {
event.preventDefault();

var object = $("#object-input").val().trim();

var emotion = $("#emotion-input").val().trim();

var place = $("#place-input").val().trim();

object.push(object);
console.log(object);

emotion.push(emotion);
console.log(emotion);

place.push(place);
console.log(place);
});
