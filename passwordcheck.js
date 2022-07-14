function checkPassword() {
  let errmessage = "";
  let errflag = false;
  let passwordTag = document.getElementById("password");
  let checkRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,21}$/gm;
  let checkRegex2 = /(password|Password|pAsSwOrD)/g;
  let checkRegex3 = /(1234|2020|2021)/g;
  let checkRegex4 = /(hello|Hello|Hello!)/g;
  let checkRegex5 = /(hi|Hi|Hi!)/g;
  if (!checkRegex1.test(passwordTag.value)) {
    errflag = true;
  }
  if (checkRegex2.test(passwordTag.value)) {
    errflag = true;
  }
  if (/[P@$$w0rd]/.test(passwordTag.value)) {
    errflag = true;
  }
  if (checkRegex3.test(passwordTag.value)) {
    errflag = true;
  }
  if (checkRegex4.test(passwordTag.value)) {
    errflag = true;
  }
  if (checkRegex5.test(passwordTag.value)) {
    errflag = true;
  }
  let passwordTag2 = document.getElementById("passwordConfirm");
  if (passwordTag.value != passwordTag2.value) {
    errflag = true; 
  } 
  if (errflag) {
    errmessage += "FAIL!";
    document.getElementById("Output").innerHTML = errmessage;
    document.getElementById("Output").style.color = "red";
  }
  else{
    errmessage += "PASS";
    document.getElementById("Output").innerHTML = errmessage;
    document.getElementById("Output").style.color = "green";
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
  checkPassword();

  // Prevent default form action. DO NOT REMOVE THIS LINE
  event.preventDefault();
}); 