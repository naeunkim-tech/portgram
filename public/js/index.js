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

  // 로그인 기능이 작동이 되지않아 일단 로그인 버튼을 누르면 일단 무조건 다음 페이지로 넘어가도록 구현했습니다.
// 리뷰를 안해주셔도 됩니다!
  window.location.href = "personal.html"; 

//   Login(data, 
//     () => {
//         console.log("로그인 성공!");
//         // window.location.href = "personal.html";
//     }, 
//     () => {
//         console.log("로그인 실패!");
//         errorMessage.textContent = error.message;
//     }
//     );
  });
  