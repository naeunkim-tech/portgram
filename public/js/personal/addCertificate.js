import { createButton } from './createButton.js';
import { createDateInput } from './createDateInput.js';
import { createTextInput } from './createTextInput.js';

// 자격증
export function addCertificate() {
  const form = document.getElementById('certificateForm');
  form.method = 'POST';
  form.action = 'http://localhost:5000/mypage/certificate';

  createTextInput(form, 'certificate', '자격 종류');

  // 취득 일자
  createDateInput(form, '발급 일자', 'certificate_date');

  // 발급 기관
  createTextInput(form, 'certificateOrg', '발급 기관');

  // 버튼
  createButton(form, 'certificate');

  document
    .getElementById('certificate_cancel')
    .addEventListener('click', (e) => {
      e.preventDefault();
      form.innerText = '';
    });
}
