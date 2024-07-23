function moreText(number) {
  let moreText = document.getElementsByClassName("products__item__more");
  let btn = document.getElementsByClassName("products__item__btn");

  if (moreText[number].style.display === "none") {
    btn[number].innerHTML = "Свернуть";
    moreText[number].style.display = "inline";
  } else {
    btn[number].innerHTML =
      'Читать далее <span style="font-size: 24px;">...</span>';
    moreText[number].style.display = "none";
  }
}
