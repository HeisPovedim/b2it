document.getElementById("email-input").addEventListener("input", function (e) {
  const pattern = /^[a-z0-9._@]*$/i;
  const value = e.target.value;

  if (!pattern.test(value)) {
    e.target.value = value.slice(0, -1);
  }
});
