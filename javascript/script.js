document.querySelector(".submit").addEventListener("click", function () {
  var mail = document.querySelector(".mail").textContent;
  if (document.getElementById("email").value === mail) {
    document.querySelector(".container-info").style.display = "block";
    document.querySelector(".container-input").style.display = "none";
  } else {
    confirm("Email incorrect");
  }
});

var listMore = document.querySelectorAll(".view-more");
var listLess = document.querySelectorAll(".view-less");
var info = document.querySelectorAll(".list-info");
var hover = document.querySelectorAll(".tag-info");

for (let i = 0; i < listMore.length; i++) {
  listMore[i].addEventListener("click", function () {
    info[i].classList.remove("hidden");
    listMore[i].classList.add("hidden");
    listLess[i].classList.remove("hidden");
    hover[i].classList.remove("hover");
  });
}

for (let k = 0; k < listLess.length; k++) {
  listLess[k].addEventListener("click", function () {
    info[k].classList.add("hidden");
    listMore[k].classList.remove("hidden");
    listLess[k].classList.add("hidden");
    hover[k].classList.add("hover");
  });
}
