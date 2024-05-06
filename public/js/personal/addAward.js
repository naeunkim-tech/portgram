import { createButton } from './createButton.js';
import { createDateInput } from './createDateInput.js';
import { createTextInput } from './createTextInput.js';

export function addAward() {
  const form = document.getElementById('awardForm');
  form.method = 'POST';
  form.action = 'http://localhost:5000/mypage/award';

  createTextInput(form, 'content', '수상 내용');

  createTextInput(form, 'organization', '시상 단체');

  createDateInput(form, '수상 일자', 'date');

  createButton(form, 'award');

  document.getElementById('award_cancel').addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });
}
