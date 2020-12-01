var index = 0;
for (var index = 0; index < 10; index++) {
  //first one
  // let colorChange1=document.getElementById("heading1").style.color="blue";
  let context1 = document.getElementById("heading1").innerHTML;
  //let colorChange2=document.getElementById("heading2").style.color="skyblue";
  let context2 = document.getElementById("heading1").innerHTML;

  setInterval(function () {
    let context1 = (document.getElementById("heading1").innerHTML =
      "No Pain No Gain");
    let context2 = (document.getElementById("heading2").innerHTML =
      "Give Your Hundred Percent");
  }, 4000);

  //second one
  let context3 = document.getElementById("heading1").innerHTML;
  let context4 = document.getElementById("heading1").innerHTML;
  setInterval(function () {
    let context3 = (document.getElementById("heading1").innerHTML =
      "Fitness & Health");
    let context4 = (document.getElementById("heading2").innerHTML =
      "is a Mentality");
  }, 3000);
}

//for counting how many times the element has been clicked
const element = document.getElementById("weekList5");

element.addEventListener("click", () => {
  console.log("function is working");
});
