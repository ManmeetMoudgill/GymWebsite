//deleting first inside box

function thursday() {
  // document.getElementById("weekList4").style.background = "green";
  //document.getElementById("weekList4").style.borderRadius = "10px";
  var DivL = document.getElementById("logoJava");

  if (typeof document.getElementById("innerDivJ1") !== undefined || null) {
    document.getElementById("innerDivJ1").remove();
  }
  if (typeof document.getElementById("innerDivJ2") !== undefined || null) {
    document.getElementById("innerDivJ2").remove();
  }
  if (typeof document.getElementById("innerDivJ3") !== undefined || null) {
    document.getElementById("innerDivJ3").remove();
  }

  if (typeof document.getElementById("innerDivJ4") !== undefined || null) {
    document.getElementById("innerDivJ4").remove();
  }

  // creating first inner div
  var newDiv1 = document.createElement("div");
  newDiv1.className = "innerDiv";
  newDiv1.id = "innerDivJ1";
  var mainDiv = document.getElementById("logoJava");
  mainDiv.appendChild(newDiv1);
  console.log(document.getElementById("innerDivJ1"));

  //creating an image an appending to first inner div
  var img = document.createElement("img");
  img.src = "https://github.com/ManmeetMoudgill/GymWebsite/blob/copyOfGymWebsite/imagesWebsite/fit-cycling.svg";
  img.className = "logophoto";
  document.getElementById("innerDivJ1").appendChild(img);

  var p1 = document.createElement("p");
  p1.innerHTML = "06AM-7AM";
  p1.className = "para1Inside paraLogo";
  document.getElementById("innerDivJ1").appendChild(p1);

  var p2 = document.createElement("p");
  p2.innerHTML = "Cycling Programs";
  p2.className = "para2Inside paraLogo";
  document.getElementById("innerDivJ1").appendChild(p2);

  var p3 = document.createElement("p");
  p3.innerHTML = "Manmeet Moudgill";
  p3.className = "para3Inside paraLogo";
  document.getElementById("innerDivJ1").appendChild(p3);

  //creating second inner div
  var newDiv2 = document.createElement("div");
  newDiv2.className = "innerDiv";
  newDiv2.id = "innerDivJ2";
  var mainDiv = document.getElementById("logoJava");
  mainDiv.appendChild(newDiv2);

  //creating an image an appending to second inner div
  var img2 = document.createElement("img");
  img2.src = "https://github.com/ManmeetMoudgill/GymWebsite/blob/copyOfGymWebsite/imagesWebsite/fit-yoga.svg";
  img2.className = "logophoto";
  document.getElementById("innerDivJ2").appendChild(img2);

  var para1 = document.createElement("p");
  para1.innerHTML = "06AM-7AM";
  para1.className = "para1Inside paraLogo";
  document.getElementById("innerDivJ2").appendChild(para1);

  var para2 = document.createElement("p");
  para2.innerHTML = "Yoga Classes";
  para2.className = "para2Inside paraLogo";
  document.getElementById("innerDivJ2").appendChild(para2);

  var para3 = document.createElement("p");
  para3.innerHTML = "Navbharti Moudgill";
  para3.className = "para3Inside paraLogo";
  document.getElementById("innerDivJ2").appendChild(para3);

  //creating a third inner div
  var newDiv3 = document.createElement("div");
  newDiv3.className = "innerDiv";
  newDiv3.id = "innerDivJ3";
  var mainDiv = document.getElementById("logoJava");
  mainDiv.appendChild(newDiv3);

  //creating an image an appending to third inner div
  var img3 = document.createElement("img");
  img3.src = "https://github.com/ManmeetMoudgill/GymWebsite/blob/copyOfGymWebsite/imagesWebsite/fit-boxing.svg";
  img3.className = "logophoto";
  document.getElementById("innerDivJ3").appendChild(img3);

  //creating first line of third inner div para and appendind it to inner div
  var paragrafo1 = document.createElement("p");
  paragrafo1.innerHTML = "06AM-7AM";
  paragrafo1.className = "para1Inside paraLogo";
  document.getElementById("innerDivJ3").appendChild(paragrafo1);

  //creating second line of third inner div para and appendind it to inner div
  var paragrafo2 = document.createElement("p");
  paragrafo2.innerHTML = "Boxing-Fitness";
  paragrafo2.className = "para2Inside paraLogo";
  document.getElementById("innerDivJ3").appendChild(paragrafo2);

  //creating third line of third inner div para and appendind it to inner div
  var paragrafo3 = document.createElement("p");
  paragrafo3.innerHTML = "Manmeet Moudgill";
  paragrafo3.className = "para3Inside paraLogo";
  document.getElementById("innerDivJ3").appendChild(paragrafo3);

  //creating a fourth inner div
  var newDiv4 = document.createElement("div");
  newDiv4.className = "innerDiv";
  newDiv4.id = "innerDivJ4";
  var mainDiv = document.getElementById("logoJava");
  mainDiv.appendChild(newDiv4);

  //creating an image an appending to third inner div
  var img4 = document.createElement("img");
  img4.src = "https://github.com/ManmeetMoudgill/GymWebsite/blob/copyOfGymWebsite/imagesWebsite/doubmell.svg";
  img4.className = "logophoto";
  document.getElementById("innerDivJ4").appendChild(img4);

  //creating first line of fourth inner div para and appendind it to inner div
  var par1 = document.createElement("p");
  par1.innerHTML = "06AM-7AM";
  par1.className = "para1Inside paraLogo";
  document.getElementById("innerDivJ4").appendChild(par1);

  //creating second line of fourth inner div para and appendind it to inner div
  var par2 = document.createElement("p");
  par2.innerHTML = "Cycling Programs";
  par2.className = "para2Inside paraLogo";
  document.getElementById("innerDivJ4").appendChild(par2);

  //creating third line of fourth inner div para and appendind it to inner div
  var par3 = document.createElement("p");
  par3.innerHTML = "Jitesh Moudgill";
  par3.className = "para3Inside paraLogo";
  document.getElementById("innerDivJ4").appendChild(par3);
}
//if its already selected

//if the main div is empty it is going to create all the elements
