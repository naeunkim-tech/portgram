
import {Login} from './core/networkManager.js';


document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    const errorMessage = document.getElementById("error-message");

    const data = {
      email,
      password
  };    

  Login(data, 
    () => {
        console.log("로그인 성공!");
        window.location.href = "personal.html";
    }, 
    () => {
        console.log("로그인 실패!");
        errorMessage.textContent = error.message;
        window.location.href = "personal.html";
    }
);
  });
  