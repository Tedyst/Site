$("document").ready(function() {
  $("#homebutton").click(function() {
    $("html, #right-panel").animate(
      {
        scrollTop: $("#right-panel").scrollTop() + $("#start").offset().top
      },
      500
    );
  });
  $("#info").click(function() {
    $("html, #right-panel").animate(
      {
        scrollTop:
          $("#right-panel").scrollTop() + $("#informations").offset().top
      },
      500
    );
  });
  $("#projectsbutton").click(function() {
    $("html, #right-panel").animate(
      {
        scrollTop: $("#right-panel").scrollTop() + $("#myprojects").offset().top
      },
      500
    );
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
      '<heading>Stoica Tedy</heading><p id="introduction">A junior programmer who loves back-end</p>',
      '<heading>Stoica Tedy</heading><p id="introduction">A junior programmer who loves backend and dislikes frontend.</p>'
    ],
    typeSpeed: 40,
    showCursor: false,
    smartBackspace: true,
    backSpeed: 50,
    backDelay: 0
  };
  var typed = new Typed("#start", options);
});
