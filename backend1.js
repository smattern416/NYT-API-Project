$(document).ready(function(){

    
        var search = $("search-term").val().trim();
        var recordsCount = $("records-retrieved").val().trim();
        
        $("button").on("click", function() {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20170101&end_date=20180101&q=sports&api-key=5RAudYxxb0qZBt9HCCQPwakGmASLlA3t";
      

      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        var results = response.data;

      }