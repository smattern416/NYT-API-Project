$(document).ready(function () {
    var startYear = $("#start-year").val().trim();
    var startURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=eN8zzZaQGj5qnOoTH0rMywIWlOB2lUR6"
    var queryURL3 = startURL + "&begin_date=" + startYear;
    var endYear = $("#end-year").val().trim();
    var queryURL4 = queryURL3 + "&end_date=" + endYear;

    $(".search-button").on("click", function () {
        $.ajax({
            url: queryURL4,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var article = $("<div>").text(response);
            $("#results").append(article);
        });
    });

    $(".clear-button").on("click", function () {
        ("#start-year").val("");
        ("#end-year").val("");
    });
});