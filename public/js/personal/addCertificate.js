import { createButton } from './createButton.js';
import { createTextInput } from './createTextInput.js';

// 자격증
export function addCertificate() {
  const form = document.getElementById('certificateForm');
  form.method = 'POST';
  form.action = '/mypage/certificate';

  const certificate = createTextInput('certificate');
  certificate.placeholder = '자격종류';
  form.appendChild(certificate);
  form.appendChild(document.createElement('br'));

  // 취득 일자
  const date = document.createElement('div');
  date.className = 'date-style';
  const content = document.createTextNode('발급 일자 : ');
  date.appendChild(content);
  const certificateDate = document.createElement('input');
  certificateDate.name = 'certificate_date';
  certificateDate.type = 'date';
  date.appendChild(certificateDate);
  form.appendChild(date);

  // 발급 기관
  const certificateOrg = createTextInput('certificateOrg');
  certificateOrg.placeholder = '발급기관';
  form.appendChild(certificateOrg);
  form.appendChild(document.createElement('br'));

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
