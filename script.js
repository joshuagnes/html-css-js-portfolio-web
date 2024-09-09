function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // targeting these two elements(menu-links and hamburger-icon), and when we click it, it's gonna either add or remove the open class.
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}