import { addEdu } from './personal/addEdu.js';
import { addAward } from './personal/addAward.js';
import { addProject } from './personal/addProject.js';
import { addCertificate } from './personal/addCertificate.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addEdu').addEventListener('click', addEdu);
  document.getElementById('education_submit').addEventListener('click', () => {
    const form = document.getElementById('educationForm');
    const schoolName = form.school_name.value; // form에서 학교 이름 데이터 수집
    const majorName = form.major_name.value;
    const optionName = form.option.value;

    // 데이터 표시
    const displayDiv = document.getElementById('addedEducation');
    const schoolNameElement = document.createElement('p');
    schoolNameElement.textContent = `학교 이름: ${schoolName} <br> 전공: ${majorName} <br> 최종 학력: ${optionName}`;
    displayDiv.appendChild(schoolNameElement);

    // form 초기화
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addAward').addEventListener('click', addAward);
});

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('addCertificate')
    .addEventListener('click', addCertificate);
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addProject').addEventListener('click', addProject);
});
