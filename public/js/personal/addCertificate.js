import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';
// 자격증
export function addCertificate() {
  const form = document.getElementById('certificateForm');
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/certification`;

  createTextInput(form, 'type', '자격 종류');

  // 취득 일자
  createDateInput(form, '발급 일자', 'date');

  // 발급 기관
  createTextInput(form, 'authority', '발급 기관');

  // 버튼
  createButton(form, 'certificate');
}
