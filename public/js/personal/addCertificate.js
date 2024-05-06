import { createButton } from './createButton.js';
import { createDateInput } from './createDateInput.js';
import { createTextInput } from './createTextInput.js';

// 자격증
export function addCertificate() {
  const form = document.getElementById('certificateForm');
  form.method = 'POST';
  form.action = '/mypage/certificate';

  createTextInput(form, 'certificate', '자격 종류');

  // 취득 일자
  createDateInput(form, '발급 일자', 'certificate_date');

  // 발급 기관
  createTextInput(form, 'certificateOrg', '발급 기관');

  // 버튼
  const btn = createButton('certificate');
  form.appendChild(btn);
  const submitButton = document.getElementById('certificate_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.submit();
  });

  const cancelButton = document.getElementById('certificate_cancel');
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });
}
