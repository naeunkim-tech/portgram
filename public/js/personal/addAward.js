import { createButton } from './createButton.js';
import { createTextInput } from './createTextInput.js';

export function addAward() {
  const form = document.getElementById('awardForm');
  form.method = 'POST';
  form.action = '/mypage/award';

  const awardInput = createTextInput('award');
  awardInput.placeholder = '수상 내용';
  form.appendChild(awardInput);
  form.appendChild(document.createElement('br'));

  const oraganizationInput = createTextInput('organization');
  oraganizationInput.placeholder = '시상 단체';
  form.appendChild(oraganizationInput);
  form.appendChild(document.createElement('br'));

  const awardDateInput = createTextInput('awardDate');
  awardDateInput.placeholder = '수상 일자';
  form.appendChild(awardDateInput);
  form.appendChild(document.createElement('br'));

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
