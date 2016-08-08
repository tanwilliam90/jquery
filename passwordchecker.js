var idLength = "";
var idSymbol = "";
var passLength = "";
var passNumber = "";
var passSymbol = "";
var passCase = "";
var attempts = 0;

function yourId() {
  idLength = "";
  idSymbol = "";
  passLength = "";
  passNumber = "";
  passSymbol = "";
  passCase = "";

  var userId = document.getElementById("userName").value;
  var password = document.getElementById("passw").value;
  if (userId.length < 6){
    idLength = "Your ID must contain at least 6 characters. ";
    $("#userName").val("");
  }
  if (userId.includes("!") || userId.includes("#") || userId.includes("$")) {
    idSymbol = "Your ID cannot contain !, #, or $ symbols. ";
    $("#userName").val("");
  }
  if (!password.includes("!") && !password.includes("#") && !password.includes("$")) {
    passSymbol = "Your password must include !, #, or $. ";
    $("#passw").val("");
  }
  if (!password.includes("0") && !password.includes("1") &&
  !password.includes("2") && !password.includes("3") &&
  !password.includes("4") && !password.includes("5") &&
  !password.includes("6") && !password.includes("7") &&
  !password.includes("8") && !password.includes("9")) {
    passNumber = "Your password must include a number. ";
    $("#passw").val("");
  }
  if (password == password.toUpperCase()) {
    passCase = "Your password cannot be all uppercase. ";
    $("#passw").val("");
  }
  if (password == password.toLowerCase()) {
    passCase = "Your password cannot be all lowercase. ";
    $("#passw").val("");
  }
  if (password < 6) {
    passLength = "Your password must contain at least 6 characters. "
    $("#passw").val("");
  }

  attempts++;
  // document.getElementById("tacos").innerHTML = "Credentials are valid: " + (Identification && pass);

}

///
$(document).ready(function() {
  $("#submit").on(
    "click",
    function() {
      $("#tacos").text(idLength + idSymbol + passLength + passNumber + passSymbol + passCase);
      if (idLength == "" && idSymbol == "" && passLength == "" && passNumber == "" && passSymbol == "" && passCase == "")
      {
        $("#tacos").text("Your user ID and Password are valid.");
      }
      if (attempts >=3) {
        $("#submit").off("click");
        $("#submit").text("This button no longer does anything. Come back later.");
      }
    });
  });
