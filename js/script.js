// Menu Mobile.
function toggleMenu() {
  const itemsMenu = document.querySelector("#items-menu");

  if (itemsMenu.style.display === "block") {
    itemsMenu.style.display = "none"; 
  } else {
    itemsMenu.style.display = "block";
  }
}