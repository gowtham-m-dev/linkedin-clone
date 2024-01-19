let profileMenu = document.getElementById("profileMenu");
function toggleMenu() {
  profileMenu.classList.toggle("open__menu");
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");
function toggleActivity() {
  sideActivity.classList.toggle("open__activity");
  if (sideActivity.classList.contains("open__activity")) {
    moreLink.innerHTML = "Show less <b>-</b>";
  } else {
    moreLink.innerHTML = "Show more <b>+</b>";
  }
}
