import { postData } from './postData.js';

export function pageLoad(btn, func, formName, addedform, content) {
  document.getElementById(btn).addEventListener('click', func);

  const form = document.getElementById(formName);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postData(formName, addedform, content);
  });
}
