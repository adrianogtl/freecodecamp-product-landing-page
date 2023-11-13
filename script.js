function navMenu() {
  const navBar = document.getElementById("nav-bar")
  const navBtn = document.querySelector(".material-symbols-rounded")
  if (navBar.style.display == "none") {
    navBar.style.display = "block"
    navBtn.textContent = "close"
  } else {
    navBar.style.display = "none"
    navBtn.textContent = "menu"
  }
}