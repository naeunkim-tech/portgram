export function postData(formName) {
  const form = document.getElementById(formName);
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  const jsonData = JSON.stringify(data);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Response Error');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}
