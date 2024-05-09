import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';

// 프로젝트
export function addProject() {
  const form = document.getElementById('projectForm');
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/project`;

  createTextInput(form, 'title', '프로젝트명');

  // 기간 설정
  createDateInput(form, '프로젝트 기간', 'startDate', '~');

  createTextInput(form, 'role', '역할');

  form.appendChild(document.createElement('br'));

  createButton(form, 'project');
}
