// var estatus = document.querySelector("h5");
// var addFriend = document.querySelector("#add");

// var removeFriend = document.querySelector("#remove");

// addFriend.addEventListener("click", function () {
//   estatus.innerHTML = "Friends";
//   estatus.style.color = "green";
// });

// removeFriend.addEventListener("click", function () {
//   estatus.innerHTML = "Stranger";
//   estatus.style.color = "red";
// });




         //add Friend & Remove Friend ek hi button se

var estatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    estatus.innerHTML = "Friends";
    estatus.style.color = "green";
    btn.innerHTML = "Remove Friend"
    check = 1
  }else
  {
    estatus.innerHTML = "Stranger";
    estatus.style.color = "red";
    btn.innerHTML = "Add Friend"
    check = 0
  }
});
