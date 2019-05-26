$.getJSON(
  "https://api.github.com/users/TEdyst/repos?type=owner&sort=pushed&page=1",
  function(data) {
    var i, text;
    text = "";
    for (i = 0; i < data.length; i++) {
      text += `<a href="${data[i]["html_url"]}" target="_blank">\
            <section>\
            <div class="section_title">${data[i]["name"]}</div>\
            <div class="about_section">\
                <span style="display:block;">${
                  data[i]["description"] == null ? "" : data[i]["description"]
                }</span>\
                            </div>\
                <div class="bottom_section">\
                    <span style="display:inline-block;"><i class="fas fa-code"></i>&nbsp; ${
                      data[i]["language"] == null
                        ? "Unknown"
                        : data[i]["language"]
                    }</span>\
                    <span><i class="fas fa-star"></i>&nbsp; ${
                      data[i]["stargazers_count"]
                    }</span>\
                    <span><i class="fas fa-code-branch"></i>&nbsp; ${
                      data[i]["forks"]
                    }</span>\
                </div>\
                        </section>\
                        </a >`;
      //   text += data[i]["name"] + "<br>";
    }
    document.getElementById("projectslistid").innerHTML = text;
    console.log(text);
  }
);
