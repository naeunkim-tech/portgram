document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "로그인실패";

    const data = {
      email,
      password
  };    

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  };

  fetch('http://localhost:5000/', options)
  .then(response => {
      if (!response.ok) {
          throw new Error('로그인 실패');
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      window.location.href = 'personal.html';
  })
  .catch(error => {
      console.error('Error:', error.message);
      errorMessage.textContent = error.message;
  });
  });
  