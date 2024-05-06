export function createDateInput(form, text, name, additional) {
  const date = document.createElement('div');
  date.className = 'date-style';

  const during = document.createTextNode(`${text} : `);
  date.appendChild(during);

  const startDateInput = document.createElement('input');
  startDateInput.name = `${name}`;
  startDateInput.type = 'date';
  date.appendChild(startDateInput);

  if (additional) {
    const content = document.createTextNode(` ${additional} `);
    date.appendChild(content);

    const endDateInput = document.createElement('input');
    endDateInput.name = 'project_end';
    endDateInput.type = 'date';
    date.appendChild(endDateInput);
  }

  date.appendChild(document.createElement('br'));
  form.appendChild(date);
}
