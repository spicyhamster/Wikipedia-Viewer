$(document).ready(function(){

  $("#search").on("click", function(){
    $("#searchBar").slideToggle();
    $("#inst").slideToggle();
  });

  $("#searchButton").on("click", function() {
    var searchTerm = $("#searchTerm").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    console.log(searchTerm);
    console.log(api);
    $("header").slideUp();

    /*var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', api);
    ourRequest.onload = function() {
      console.log(ourRequest.responseText);
    }; */
    //var result;
    //$.getJSON(api, function(res){
    //$("#name1").text(res[1][0]);

    //});
    //$("#results").slideDown();


    $.ajax({
      type:"GET",
      url: api,
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log(data);
        console.log(api);
        //Get Title: data[1][x]
        //Get Description: data[2][x]
        //Get Link: data[3][x]
        $("#results").html("");
        for(var i=0;i<data[1].length; i++){
          $("#results").append("<li class='entry'><a href='"+data[3][i]+"' target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
        console.log(data[1].length);
      },
      error: function(errorMessage){
      alert("Error: "+errorMessage);
    }
    });
  });

  $("#searchTerm").keypress(function(a){
    if(a.which==13){
      $("#searchButton").click();
    }
  });


  //API
  //https://www.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=search&gsrsearch=[searchTerm]
  /* $("#back").on("click", function(){
    $("#search").show();
    $("#random").show();
    $("#inst").show();
    $("#searchBar").hide();
  })

  function hide(data) {
    var x = document.getElementById(data);
    x.style.display = "none";
  }
  function show(data) {
    var x = document.geteElementById(data);
    x.style.display = "inline";
  } */

});

//var api = "https://www.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchTerm + "&namespace=0&limit=10";
