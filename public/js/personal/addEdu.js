import { createButton } from './createButton.js';
import { createTextInput } from './createTextInput.js';

// 학력
export function addEdu() {
  // educationForm 아이디를 가진 form 태그 선택
  const form = document.getElementById('educationForm');
  form.method = 'POST';
  form.action = '/mypage/education';
  // 기존 내용을 비우기
  // form.innerHTML = '';

  const schoolInput = createTextInput('school');
  schoolInput.placeholder = '학교이름';
  form.appendChild(schoolInput);
  form.appendChild(document.createElement('br'));

  const majorInput = createTextInput('major');
  majorInput.placeholder = '전공';
  form.appendChild(majorInput);
  form.appendChild(document.createElement('br'));

  // 학력 선택 라디오 버튼
  const degrees = ['재학중', '학사졸업', '석사졸업', '박사졸업'];
  degrees.forEach(function (labelText, index) {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.id = 'option' + (index + 1);
    radioButton.name = 'option';
    radioButton.value = index + 1;
    const label = document.createElement('label');
    label.setAttribute('for', radioButton.id);
    label.textContent = labelText;
    form.appendChild(radioButton);
    form.appendChild(label);
  });
  form.appendChild(document.createElement('br'));

  // 확인, 취소 버튼
  const btn = createButton('education');
  form.appendChild(btn);

  const cancelButton = document.getElementById('education_cancel');
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.innerText = '';
  });

  // 예: fetch API를 사용한 비동기 데이터 전송
  const submitButton = document.getElementById('education_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // 폼 기본 제출 막기

    const form = document.getElementById('educationForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    const jsonData = JSON.stringify(data);

    fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  });
}

// export function addedEdu(e) {
//   e.preventDefault();

//   // Form 데이터 수집
//   const form = document.getElementById('educationForm');
//   const schoolNameInput = form.querySelector('[name="school_name"]');

//   // 수집된 데이터를 사용하여 리스트 아이템 생성
//   const listItem = document.createElement('li');
//   listItem.textContent = `학교 이름: ${schoolNameInput.value}`;

//   // id가 addedEducation인 div에 리스트 아이템 추가
//   const addedEducationDiv = document.getElementById('addedEducation');
//   const list =
//     addedEducationDiv.querySelector('ul') || document.createElement('ul');
//   list.appendChild(listItem);
//   addedEducationDiv.appendChild(list);
// }
