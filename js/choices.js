window.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector(".choices-select");
  const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
  });
});
