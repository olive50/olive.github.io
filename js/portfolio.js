const projects = document.getElementsByClassName("project");
for (let x = 0; x < projects.length; x++) {
  const item = projects[x];
  item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #04AA6D ;";
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.style = "";
  });
}