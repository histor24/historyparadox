function popup1() {
  document.getElementById("textbox-overlay1").style.display = "block";
}
function popupEnd1() {
  document.getElementById("textbox-overlay1").style.display = "none";
}
function popup2() {
  document.getElementById("textbox-overlay2").style.display = "block";
}
function popupEnd2() {
  document.getElementById("textbox-overlay2").style.display = "none";
}
function popup3() {
  document.getElementById("textbox-overlay3").style.display = "block";
}
function popupEnd3() {
  document.getElementById("textbox-overlay3").style.display = "none";
}


function show() {
  var elem = document.getElementById("other");
  var style = getComputedStyle(elem);
  if (style.display == "none") {
    document.getElementById("other").style.display = "block";
    document.getElementById("buttonOther").innerHTML = "Скрыть";
  } else {
    document.getElementById("other").style.display = "none";
    document.getElementById("buttonOther").innerHTML = "Показать";
  }
}

function help() {
  document.getElementById("help").style.display = "block";
}
function helpEnd() {
  document.getElementById("info").style.display = "none";
}

document.getElementById("form").addEventListener("submit", checkForm);

var fail = "";
function checkForm(event) {
  event.preventDefault();
  var el = document.getElementById("form");
  var tel = el.phone.value;
  var email = el.email.value;
  var text = el.text.value;
  if (tel == "" || email == "" || text == "") {
    fail = "Заполните все поля";
    document.getElementById("fail").innerHTML = fail;
    document.getElementById("fail").style.visibility = "visible";
  }
  else if (email.includes("@")) {
    window.open('mailto:gkebgeorg27@gmail.com?subject=Вопрос от пользователя&body=Номер телефона:%20%0A%0AИмя в Телеграме:%20%0A%0AСообщение:%20%0A%0A');
  }
  else {
    fail = "Проверьте правильность эл. почты";
    document.getElementById("fail").innerHTML = fail;
    document.getElementById("fail").style.visibility = "visible";
  }
}

function copy() {
  var copyText = document.getElementById("phone");
  copyText.select();
  document.execCommand("copy");
}
document.getElementById("copy").addEventListener("click", copy)

function copy2() {
  var copyText = document.getElementById("email");
  copyText.select();
  document.execCommand("copy");
}
document.getElementById("copy2").addEventListener("click", copy2)

function copy3() {
  var copyText = document.getElementById("input");
  copyText.select();
  document.execCommand("copy");
}
document.getElementById("copy3").addEventListener("click", copy3)

document.getElementById("question").onclick = help;
function help () {
  document.getElementById("info").style.display = "block";
}

function order() {
  document.getElementById("order").style.display = "block";
}
function orderEnd() {
  document.getElementById("order").style.display = "none";
}


var photo1 = document.getElementById("photo1");
var photo2 = document.getElementById("photo2");
var photo3 = document.getElementById("photo3");

function move1() {
  photo1.style.display = "none";
  photo2.style.cssText = "display: block; animation: fade-down 0.5s";
  photo3.style.display = "none";
  document.getElementById("photo-list2").style.cssText = "color: white; background-color: red";
  document.getElementById("photo-list1").style.cssText = "color: black; background-color: #bababa";
  document.getElementById("photo-list3").style.cssText = "color: black; background-color: #bababa";
}
function move2() {
  photo1.style.display = "none";
  photo2.style.display = "none";
  photo3.style.cssText = "display: block; animation: fade-down 0.5s";
  document.getElementById("photo-list3").style.cssText = "color: white; background-color: red";
  document.getElementById("photo-list2").style.cssText = "color: black; background-color: #bababa";
  document.getElementById("photo-list1").style.cssText = "color: black; background-color: #bababa";
}
function move3() {
  photo1.style.cssText = "display: block; animation: fade-down 0.5s";
  photo2.style.display = "none";
  photo3.style.display = "none";
  document.getElementById("photo-list1").style.cssText = "color: white; background-color: red";
  document.getElementById("photo-list2").style.cssText = "color: black; background-color: #bababa";
  document.getElementById("photo-list3").style.cssText = "color: black; background-color: #bababa";
}


document.getElementById("prform").addEventListener("submit", promo);


var attention = "";
function promo(event) {
  event.preventDefault();
  var stroka = document.getElementById("prform");
  var promo = stroka.promo.value;
  var ivan = "Зайцевский";
  if (promo == ivan) {
    attention = "Ваш прмокод для ввода при заказе: _";
    document.getElementById("code").innerHTML = attention;
    document.getElementById("attention").style.display = "none";
  } else {
    attention = "Неверный промокод";
    document.getElementById("attention").innerHTML = attention;
  }
}

document.getElementById("button-quest1").addEventListener("click", openQuest1);
function openQuest1() {
  var ans = document.getElementById("quest-ans1");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest1").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest1").innerHTML = "Показать";
  }
}
document.getElementById("button-quest2").addEventListener("click", openQuest2);
function openQuest2() {
  var ans = document.getElementById("quest-ans2");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest2").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest2").innerHTML = "Показать";
  }
}
document.getElementById("button-quest3").addEventListener("click", openQuest3);
function openQuest3() {
  var ans = document.getElementById("quest-ans3");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest3").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest3").innerHTML = "Показать";
  }
}
document.getElementById("button-quest4").addEventListener("click", openQuest4);
function openQuest4() {
  var ans = document.getElementById("quest-ans4");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest4").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest4").innerHTML = "Показать";
  }
}
document.getElementById("button-quest5").addEventListener("click", openQuest5);
function openQuest5() {
  var ans = document.getElementById("quest-ans5");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest5").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest5").innerHTML = "Показать";
  }
}

document.getElementById("button-quest6").addEventListener("click", openQuest6);
function openQuest6() {
  var ans = document.getElementById("quest-ans6");
  var styleAns = getComputedStyle(ans);
  if (styleAns.display == "none") {
    ans.style.display = "block";
    document.getElementById("button-quest6").innerHTML = "Скрыть";
  } else {
    ans.style.display = "none";
    document.getElementById("button-quest6").innerHTML = "Показать";
  }
}

function avito() {
  window.open("https://clck.ru/3B3Bxp", "_blank");
}
