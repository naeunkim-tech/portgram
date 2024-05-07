export function postData(formName) {
  const form = document.getElementById(formName);
  const formData = new FormData(form);
  const newData = {};
  formData.forEach((value, key) => (newData[key] = value));
  const data = JSON.stringify(newData);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
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
