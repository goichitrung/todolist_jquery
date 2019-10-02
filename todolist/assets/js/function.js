//initialize variables
var text;

//reset color background
//reset_color();
//define button + to add new todo
$("#add-btn").on("click", function() {
  $("#new-todo").slideToggle(1000, function() {
    //alert("input showup");
  });
});
//add a new todo when hitting enter
$("#new-todo").on("keypress", function(e) {
  if (e.which === 13) {
    while ($(this).val() !== "") {
      text = $(this).val();
      $("ul").append(
        '<li><span style="display:none;"><i ' +
          'class="fas fa-trash-alt"' +
          "></i></span>" +
          text +
          "</li>"
      );
      $(this).val("");
      //reset_color();
    }
  }
});
//add strike through effect
$("ul").on("click", "li", function() {
  //   alert("mouseenter");
  $(this).toggleClass("strike-through");
});

//function to reset color background
//but no need now because it can be done in css
function reset_color() {
  for (var i = 0; i < $("li").length; i++) {
    if (i == 0 || i % 2 === 0) {
      $("li")[i].style.backgroundColor = "#c9c5b5";
    } else $("li")[i].style.backgroundColor = "white";
  }
}
//hover to display delete icon
$("ul").on("mouseenter", "li", function() {
  $(this)
    .children()
    .css({
      display: "inline-block"
    });
});
$("ul").on("mouseleave", "li", function() {
  $(this)
    .children()
    .css("display", "none");
});
//delete a li
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(1000, function() {
      $(this).remove();
      //reset_color();
    });

  e.stopPropagation();
});
