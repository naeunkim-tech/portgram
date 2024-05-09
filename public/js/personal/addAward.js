import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';

export function addAward() {
  const form = document.getElementById('awardForm');
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/award`;

  createTextInput(form, 'content', '수상 내용');

  createTextInput(form, 'organization', '시상 단체');

  createDateInput(form, '수상 일자', 'date');

  createButton(form, 'award');
}
