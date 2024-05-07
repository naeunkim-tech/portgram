import {Register} from './core/networkManager.js';

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const name = document.getElementById('name').value;
  
      if (password !== confirmPassword) {
        errorMessage.textContent = '비밀번호가 일치하지 않습니다.';
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
            window.location.href = "/login"; // 서버에서 구축한 경로 '/personal'로 이동
        }, 
        (error) => {
          console.log("회원가입 실패!");
          console.log(error);
          // errorMessage.textContent = error.message;
        }
      );
    });
  });