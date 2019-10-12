$(document).ready(function(){

for (var i = 0; i< movies.length ; i++) {
  $("#movieDisplay").append(" <div class='col-lg-6  col-sm-12 movieAll'> <div class='movieCard'><div><img class='movieCardImage' src=' "+ movies[i].image +" '></div> <div class='movieCardSite'><div><div class='movieCardTitle'>"+movies[i].title+"</div> <div class='movieCardDesc'>"+movies[i].description+"</div></div> <div class='liker'><div class='clickMe btn'><a class='likerText'>Like</a><span><a class='far fa-thumbs-up'></a></span></div><span class='theCount'>"+movies[i].like+"</span></div></div></div>");
  };
 

// Like function //

$(".clickMe").on('click', function(like) {
  var counter = Number($(this).next().text());
    counter += 1;
    return ($(this).next().text(counter));
});



// Sort function // 

$("#buttonSort").on('click', function() {

var likeDiff = 0;  //compare default//
var orderedList = movies.sort(likeCompare); //new list after sort//
var newOrder = $(".movieNewDisplay").html(" "); //new list to display//

function likeCompare(first,second){  //compare vals//
    if (first.like > second.like) {
   likeDiff = -1;
} else if (first.like < second.like) {
    likeDiff = +1;
}
  return likeDiff;
};

for (var i = 0; i< orderedList.length ; i++) { //append newly Ordered list//
  $(newOrder).append(" <div class='col-lg-6  col-sm-12 movieAll'> <div class='movieCard'><div> <img class='movieCardImage' src=' "+ orderedList[i].image +" '></div> <div class='movieCardSite'><div><div class='movieCardTitle'>"+orderedList[i].title+"</div><div class='movieCardDesc'>"+orderedList[i].description+"</div></div><div class='liker'><div class='clickMe btn'><a class='likerText'>Like</a><span><a class='far fa-thumbs-up'></a></span></div><span class='theCount'>"+orderedList[i].like+"</span></div></div></div>");
  };
});


});
