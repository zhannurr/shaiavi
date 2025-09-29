const toggleBtn = document.getElementById("toggleBtn");
const sidebarRight = document.getElementById("sidebarRight");

toggleBtn.addEventListener("click", () => {
  sidebarRight.classList.toggle("hidden");
});
