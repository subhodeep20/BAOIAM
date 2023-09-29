function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["roll"].value;
  if (y == "") {
    alert("roll no must be filled out");
    return false;
  }
  let z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("email must be filled out");
    return false;
    
  }
}

function myFunction() {
  alert("Hello! I am an alert box!");
}

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 30) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}