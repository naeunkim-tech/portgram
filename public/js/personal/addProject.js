import { createButton } from './createButton.js';
import { createDateInput } from './createDateInput.js';
import { createTextInput } from './createTextInput.js';

// 프로젝트
export function addProject() {
  const form = document.getElementById('projectForm');
  form.method = 'POST';
  form.action = 'http://localhost:5000/mypage/project';

  createTextInput(form, 'project', '프로젝트명');

  // 기간 설정
  createDateInput(form, '프로젝트 기간', 'project_start', '~');

  createTextInput(form, 'projectRole', '역할');

  form.appendChild(document.createElement('br'));

  createButton(form, 'project');

  document.getElementById('project_cancel').addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });
}
