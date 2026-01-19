console.log("Script loaded successfully.");

const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  boxes.forEach(box => {
    const title = box.querySelector("h2").innerText.toLowerCase();
    box.style.display = title.includes(value) ? "block" : "none";
  });
});
