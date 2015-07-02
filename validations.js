$(document).ready(function(){
	$("#sign_up").submit(function(event){
		event.preventDefault();
		validateEmail();
		validatePass();
	});

});

function validateEmail() {
  var x = document.forms["sign_up"]["email"].value;
  var VALID_EMAIL = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var test = "mail@mail.com"
  if (x == null || x == "" || !VALID_EMAIL.test(x) ) {
	  $(".errors h4").text("Email must be valid");
    return false;
  } else {
    $(".errors h4").text("");
  }
}

function validatePass () {
	var x = document.forms["sign_up"]["password"].value;
	var PASS = /\d+/;
	var UPPER_CASE = new RegExp("[A-Z]");
	if (!PASS.test(x)) {
	  $(".errors h4").text("Password must have at least one number");		
	  return false;
	} else if (x.length < 8) {
	  $(".errors h4").text("Password must have at least eight characters");
	  return false;
	} else if (!UPPER_CASE.test(x)) {
	  $(".errors h4").text("Password must have at least one uppercase letter");
	  return false;
	} else {
    $(".errors h4").text("");		
	}
}