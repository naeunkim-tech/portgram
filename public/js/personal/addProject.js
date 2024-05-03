import { createButton } from './createButton.js';
import { createTextInput } from './createTextInput.js';

// 프로젝트
export function addProject() {
  const form = document.getElementById('projectForm');
  form.method = 'POST';
  form.action = '/mypage/project';

  const projectInput = createTextInput('project');
  projectInput.placeholder = '프로젝트명';
  form.appendChild(projectInput);
  form.appendChild(document.createElement('br'));

  // 기간 설정
  const date = document.createElement('div');
  date.className = 'date-style';

  const during = document.createTextNode('프로젝트 기간 : ');
  date.appendChild(during);

  const startDateInput = document.createElement('input');
  startDateInput.name = 'project_start';
  startDateInput.type = 'date';
  date.appendChild(startDateInput);

  const content = document.createTextNode('');
  date.appendChild(content);

  const endDateInput = document.createElement('input');
  endDateInput.name = 'project_end';
  endDateInput.type = 'date';
  date.appendChild(endDateInput);
  date.appendChild(document.createElement('br'));
  form.appendChild(date);

  const projectRoleInput = createTextInput('projectRole');
  projectRoleInput.placeholder = '역할';
  form.appendChild(projectRoleInput);
  form.appendChild(document.createElement('br'));

  const btn = createButton('project');
  form.appendChild(btn);

  const submitButton = document.getElementById('project_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.submit();
  });

  const cancelButton = document.getElementById('project_cancel');
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });
}
