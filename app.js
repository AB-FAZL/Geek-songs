const searchbar = document.getElementById("search-bar");
const search_input = document.getElementById("search");

if (searchbar) {
  console.log("21");
}
if (search_input) {
  console.log("25");
}

searchbar.addEventListener("click", () => {
  search_input.focus();
});
