$("document").ready(function() {
  $("#info").click(function() {
    $("#right_panel").attr("src", "./pages/1.html#info");
  });
  $("#github").click(function() {
    window.location.href = "https://github.com/Tedyst";
  });
  $("#email").click(function() {
    window.location.href = "mailto:stoicatedy@gmail.com";
  });
  $("#linkedin").click(function() {
    window.location.href = "https://www.linkedin.com/in/stoica-tedy-bb29b8163/";
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
  }, 200);

  $("#text").addClass("animated fadeOut");
  setTimeout(function() {
    $("#text").removeClass("animated fadeOut");
    $("#text").css("display", "none");
  }, 500);
  var options = {
    strings: [
      '<heading>Stoica Tedy</heading><p id="introduction">A junior programmer who loves backend and dislikes frontend.</p>'
    ],
    typeSpeed: 40,
    showCursor: false
  };
  var typed = new Typed("#start", options);
});
