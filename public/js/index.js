document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "로그인실패";
  });
  