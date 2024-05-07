import {Register} from './core/networkManager.js';

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');
    const modal = document.getElementById('result-modal');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const name = document.getElementById('name').value;
  
      if (password !== confirmPassword) {
        errorMessage.textContent = '• 비밀번호가 일치하지 않습니다.';
        return;
      }
  
      console.log('이메일:', email);
      console.log('비밀번호:', password);
      console.log('이름:', name);
      
      const data = {
        name,
        email,
        password,
      };    

      Register(data, 
        () => {
            console.log("회원가입 성공!");
            modal.style.display = "block";            
        }, 
        (error) => {
          console.log("회원가입 실패!");
          errorMessage.textContent = "• 회원가입에 실패했습니다.";
        }
      );
    });
  });


  document.getElementById("confirm-password").addEventListener("input", checkPasswords);


  function checkPasswords() {
    console.log("checkPasswords");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");

  
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add("error");
    } else {
      confirmPassword.classList.remove("error");
    }
  }