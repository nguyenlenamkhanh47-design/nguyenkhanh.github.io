const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

const topBtn =
document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});
