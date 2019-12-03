// intial array of variables
var memes = ["Feelings", "Things", "Places"]
// Function for dumping JSON content
function displayMemeInfo() {

    var meme = $(this).attr("data-name");
    var queryURL = "https://source.unsplash.com/" + meme + "APIKEY MISSING?"

    $.ajax({
        url: queryURL
        method: "GET"
    }).then(function (response) {
        $("#movies-view").text(JSON.stringify(response));
    });
        }

    //Search for things, places, and feelings
    <button data-search="things">
  
    </button>
    
    <button data-search="feelings">
   
    </button>
    <button data-search="Place">
    
    </button>

    <div id="memes-appear-here">
    </div>

     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript">
    </script>
    $("button").on("click", function () {

        var search = $(this).attr("data-search");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q="
            person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url:queryURL,
            method: "Get"
    
        })
    }    

// function displaying array of variables
function renderButtons() {
    // deleting the buttons prior to adding new variables
    $("#buttons-view").empty();

    // looping through the array of variables
    for (var i = -0; i < memes.length; i++) {

        var a = $("<button>");

        a.addClass("meme");

        a.attr("data-name", memes[i]);

        a.text(memes[i]);

        $("#buttons-view").append(a);

        // this function handles events where one button is clicked
        $("#add-meme").on("click", function (event) {
            event.preventdefault();

            // this line grabs the input from the textbox
            var meme = $("meme-input").val().trim();

            memes.push(meme);
            console.log(memes);

            renderButtons();
        });
        