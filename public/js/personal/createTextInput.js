export function createTextInput(name) {
  const input = document.createElement('input');
  input.name = `${name}_name`;
  input.className = 'input-style';
  input.type = 'text';

  return input;
}
