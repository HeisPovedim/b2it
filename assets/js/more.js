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

function moreItems() {
  let moreItems = document.getElementsByClassName(
    "list-technologies__items-more"
  );
  let btn = document.getElementsByClassName("list-technologies__item__btn");

  if (moreItems[0].style.display === "none") {
    btn[0].innerHTML = "Свернуть список";
    moreItems[0].style.display = "inline";
  } else {
    btn[0].innerHTML =
      'Смотреть весь список <span style="font-size: 24px;">...</span>';
    moreItems[0].style.display = "none";
  }
}
