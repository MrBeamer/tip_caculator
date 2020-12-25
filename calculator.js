function calculate () {
let billingAmount = document.getElementById("billing-amount").value;
let serviceQuality = document.getElementById("service-quality").value;
let peopleAmount = document.getElementById("people-amount").value;

// validate billing amount
if (billingAmount === "" || serviceQuality  == 0) {
alert("Ups, you forgot something.")
return;
}

// checking if each should show or not
if (peopleAmount === "" || peopleAmount <= 1) {
  peopleAmount = 1;
  document.getElementById("each").style.display = "none";
} else {
  document.getElementById("each").style.display = "block";
}

 //Calculate tip
let tip = (billingAmount*serviceQuality)/peopleAmount;

//round to two decimal places
tip = Math.round(tip * 100) / 100

//next line allows to always have two digits after decimal point
tip = tip.toFixed(2);

console.log(tip);

// Display the tip (function called)
document.getElementById("boxTip").style.display = "block";
document.getElementById("tip").innerHTML = `${tip} Euro`;
}


// Hidden tip amount on load / initial display state none (before calling function)
// document.getElementById("boxTip").style.display = "none";
// document.getElementById("each").style.display = "none";

//click button -> call function and start to calculating the tip -> displaying the tip
document.getElementById("calculate").onclick = function () {
  calculate();
};
