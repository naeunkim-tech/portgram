import { createButton } from './createInput/createButton.js';
import { createTextInput } from './createInput/createTextInput.js';

// 학력
export function addEdu() {
  const form = document.createElement('educationForm');
  form.method = 'POST';
  form.action = 'http://localhost:5000/mypage/education';

  createTextInput(form, 'school', '학교 이름');

  createTextInput(form, 'major', '전공');

  // 학력 선택 라디오 버튼
  const degrees = ['재학중', '학사졸업', '석사졸업', '박사졸업'];
  degrees.forEach(function (labelText, index) {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.id = 'option' + (index + 1);
    radioButton.name = 'degree';
    if (radioButton.id == 'option1') {
      radioButton.value = '재학중';
    } else if (radioButton.id == 'option2') {
      radioButton.value = '학사졸업';
    } else if (radioButton.id == 'option3') {
      radioButton.value = '석사졸업';
    } else {
      radioButton.value = '박사졸업';
    }

    const label = document.createElement('label');
    label.setAttribute('for', radioButton.id);
    label.textContent = labelText;
    form.appendChild(radioButton);
    form.appendChild(label);
  });
  form.appendChild(document.createElement('br'));

  // 확인, 취소 버튼
  createButton(form, 'education');
}
