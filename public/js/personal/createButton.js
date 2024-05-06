export function createButton(form, name) {
  const btn = document.createElement('div');
  btn.className = 'confirmBtn';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.id = `${name}_submit`;
  submitButton.className = 'submit-button';
  submitButton.value = '확인';
  btn.appendChild(submitButton);

  const cancelButton = document.createElement('button');
  cancelButton.id = `${name}_cancel`;
  cancelButton.className = 'cancel-button';
  cancelButton.textContent = '취소';
  btn.appendChild(cancelButton);

  form.appendChild(btn);
}
