export function createTextInput(form, name, placeholder) {
  const input = document.createElement('input');
  input.name = `${name}_name`;
  input.className = 'input-style';
  input.type = 'text';
  input.placeholder = placeholder;

  form.appendChild(input);
  form.appendChild(document.createElement('br'));
}
