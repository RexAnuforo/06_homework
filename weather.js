var APIKey= "5746f483920cb8dbd54b338576b8e907";
var cityname='';
var allCities = [];


// This function should loop through the cities array and generate a list of all cities on the page
function renderCityNames(){
    allCities.push(cityname)
    var citylog = $("#citylogdiv")
    for(i=0; i < allCities.length;i++){
    var newP =$("<p>");
    newP.text(allCities[i]);
    citylog.append(newP);
    
}};



// Here is where we make the api call
function getCityFromApi(cityname){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
    
        // Log the queryURL
        console.log(queryURL);
    
        // Log the resulting object
        console.log(response);
    
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    
      });
}

// This runs when the user clicks on the submit button
$("#submitBtn").on("click",function(event){
    event.preventDefault();
    cityname = $("#cityName").val();

    // Add the city name to the array
    allCities.push(cityname);

    // This calls our Api function
    getCityFromApi(cityname);

    // Call our function to render cities
    renderCityNames();
})

 







