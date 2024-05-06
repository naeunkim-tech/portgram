import { createButton } from './createButton.js';
import { createDateInput } from './createDateInput.js';
import { createTextInput } from './createTextInput.js';

export function addAward() {
  const form = document.getElementById('awardForm');
  form.method = 'POST';
  form.action = '/mypage/award';

  createTextInput(form, 'award', '수상 내용');

  createTextInput(form, 'organization', '시상 단체');

  createDateInput(form, '수상 일자', 'awardDate');

  const btn = createButton('award');
  form.appendChild(btn);

  const submitButton = document.getElementById('award_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.submit();
  });

  const cancelButton = document.getElementById('award_cancel');
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });
}
