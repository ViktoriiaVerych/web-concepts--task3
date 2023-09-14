function applyStylesheet(stylesheet) {
    document.getElementById("stylesheet").href = stylesheet;
}
// f
const simpleButtons = document.querySelectorAll('.simple-button');
const lordButton = document.querySelector('.lord-button');

lordButton.addEventListener('click', () => {
  simpleButtons.forEach(item => {
    item.textContent = "#";
  });
});