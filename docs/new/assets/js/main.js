$("document").ready(function() {
  $("#info").click(function() {
    $("#right_panel").attr("src", "./pages/1.html#info");
  });
  $("#github").click(function() {
    window.location.href = "https://github.com/Tedyst";
  });
});

setTimeout(function() {
  $("#leftloading").addClass("animated fadeOut");
  $("#rightloading").addClass("animated fadeOut");
  setTimeout(function() {
    $("#leftloading").removeClass("animated fadeOut");
    $("#rightloading").removeClass("animated fadeOut");
    $("#leftloading").css("display", "none");
    $("#rightloading").css("display", "none");
    $("#loading").css("display", "none");
  }, 500);
}, 1500);

setTimeout(function() {
  $("#text").addClass("animated fadeOut");
  setTimeout(function() {
    $("#text").removeClass("animated fadeOut");
    $("#text").css("display", "none");
  }, 500);
}, 1000);
