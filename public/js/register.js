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

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

    fetch('http://localhost:5000/user/register', options) // localhost:5000 로컬 테스트용임. 일단
    //TODO 서버 통신용 모듈 스크립트 따로 만들어서 fetch하는 함수 사용할 수 있도록 만들자. 
    //로컬인지 릴리즈인지에 따라 변경되도록 해야함
      .then(response => response.text())
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.error('오류 발생:', error);
        // 오류 처리
      });
      
    });
  });