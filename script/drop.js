function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    console.log("כשנוגעים");
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
}
function dragEnter(ev) {
    console.log("מעל");
    event.preventDefault();
    return true;
}
function dragOver(ev) {
    return false;
}
function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    console.log(":)כשנוחת");
    var try1 = document.getElementById("boxB")
    console.log(try1);
        if (try1.className === "x") 
        console.log("x");
    return false;
}
let darkMode = localStorage.getItem("darkMode");
function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}
if (darkMode === "enabled") {
  enableDarkMode();
}
const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});
function help() {
  var x = document.getElementById("help1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
