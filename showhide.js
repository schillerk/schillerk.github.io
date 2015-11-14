// $(document).ready(function(){
//     $(".popup-content").hide();
// });

// var main = function() {
//   $(".popup-button").click(function() {
//     $(".popup-content").toggle();
//     $("#source").appendTo('#destination');
//   });
// };

// $(document).ready(main);

$(document).ready(function(){
    $(".popup-content").hide();
});

var main = function() {
  $(".popup-button").click(function() {
    $(".popup-content").toggle();
  });
  $('.source').click(function() {
    $('.source').animate({
      bottom: "-625px"
    }, 250);
  });
};

$(document).ready(main);