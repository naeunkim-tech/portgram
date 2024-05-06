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
        window.location.href = "/personal"; // 서버에서 구축한 경로 '/personal'로 이동
    }, 
    (error) => {
        console.log("로그인 실패!");
        // errorMessage.textContent = error.message;
        console.log(error);
    }
    );
  });
  