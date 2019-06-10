$(document).ready() {
    var startYear = $("#start-year").val;
    var startURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=eN8zzZaQGj5qnOoTH0rMywIWlOB2lUR6"
    var queryURL3 = startURL + "&begin_date=" + startYear;
    var endYear = $("#end-year").val;
    var queryURL4 = queryURL3 + "&end_date=" + endYear;

    $("#search").on("click", function(){
        $.ajax({
            url: queryURL4,
            method: "GET",
          }).then(function(response) {
            
          });
    });

    $("#clear-results").on("click", function(){
       ("#start-year").val("");
       ("#end-year").val("");
    });
};