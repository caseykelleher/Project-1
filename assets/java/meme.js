//javascript, jQuery - sample code from Giphy API site
// 2
// 3var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9tPmQXukCEVIORN4YM6PUQloQ0OiWlC3");
// 4xhr.done(function(data) { console.log("success got data", data); });



var verb = "happy";

console.log("Im working")

var object = [];
var emotion = [];
var place = [];

$("#search-button").on("click", function(event) {
event.preventDefault();
console.log("click")
var objectText = $("#object-input").val().trim();

var emotionText = $("#emotion-input").val().trim();

var placeText = $("#place-input").val().trim();

object.push(objectText);
console.log(objectText);

emotion.push(emotionText);
console.log(emotionText);

place.push(placeText);
console.log(placeText);

// queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9tPmQXukCEVIORN4YM6PUQloQ0OiWlC3&q=" + objectText + "+" + emotionText + "+" + placeText + "+" + "&limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

$("#search-button").on("click", function(event) {
event.preventDefault();
console.log("click")
var objectText = $("#object-input").val().trim();
        
var emotionText = $("#emotion-input").val().trim();
        
var placeText = $("#place-input").val().trim();
        
object.push(objectText);
console.log(objectText);
        
emotion.push(emotionText);
console.log(emotionText);
        
place.push(placeText);
console.log(placeText);

// queryURL for Unsplash API
var queryURL = "https://source.unsplash.com/random";
    
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

//add code to render gif to page

});

 pausing-gifs-solution
$(".gif").on("click", function() {
    //jQuery method to set value on HTML
    var state = $(this).attr("data-state");
    
    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    });

function buildQueryURL() {
    //queryURL is the url we'll use to query the API
});
