let mainUrl =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";

$(".search-button").click(function () {
  fetch(mainUrl)
    .then(function (response) {
      return response.json();
    })

     .then(function (mainData) {
  let urlForJson = mainData.data[0].images.original.url;
  // console.log(urlForJson);
        $(".display").append("<img src=" + urlForJson + ">");


    return urlForJson;
    })
  let userInput= $(".search-term").val();
});

// [ ] Use string interpolation to update the request URL in your fetch request so a gif from the user's search term displays when the button is clicked

  
