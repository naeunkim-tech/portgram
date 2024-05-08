import { createTextInput } from './createInput/createTextInput.js';
import { createDateInput } from './createInput/createDateInput.js';

// 수정 버튼 생성
export function createEditButton() {
  const editButton = document.createElement('button');
  editButton.className = 'contentEditBtn';
  editButton.textContent = '수정';

  return editButton;
}

export function editedInfo(list, getData, info) {
  list.remove();
  const editForm = document.createElement('form');
  editForm.id = `${info}_form`;
  if (info === 'education') {
    createTextInput(editForm, 'school', '', getData.school);
    createTextInput(editForm, 'major', '', getData.major);
  } else if (info === 'award') {
    createTextInput(editForm, 'content', '', getData.content);
    createTextInput(editForm, 'organization', '', getData.organization);
    createDateInput(editForm, '수상 일자', 'date');
  } else if (info === 'certification') {
    createTextInput(editForm, 'type', '', getData.type);
    createDateInput(editForm, '발급 일자', 'date');
    createTextInput(editForm, 'authority', '', getData.authority);
  } else {
    createTextInput(editForm, 'title', '', getData.title);
    createDateInput(editForm, '프로젝트 기간', 'startDate', '~');
    createTextInput(editForm, 'role', '', getData.role);
  }

  return editForm;
}
