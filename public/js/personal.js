function createButton(name) {
  const btn = document.createElement('div');
  btn.className = 'confirmBtn';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.id = `${name}_submit`;
  submitButton.className = 'submit-button';
  submitButton.value = '확인';
  btn.appendChild(submitButton);

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancel';
  cancelButton.className = 'cancel-button';
  cancelButton.textContent = '취소';
  btn.appendChild(cancelButton);

  return btn;
}
// 학력
function openEdu() {
  // educationForm 아이디를 가진 form 태그 선택
  const form = document.getElementById('educationForm');
  form.method = 'POST';
  form.action = '/mypage/education';
  // 기존 내용을 비우기
  // form.innerHTML = '';

  const schoolInput = document.createElement('input');
  schoolInput.name = 'school_name';
  schoolInput.className = 'input-style';
  schoolInput.type = 'text';
  schoolInput.placeholder = '학교이름';
  form.appendChild(schoolInput);
  form.appendChild(document.createElement('br'));

  const majorInput = document.createElement('input');
  majorInput.name = 'school_major';
  majorInput.className = 'input-style';
  majorInput.type = 'text';
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
  //확인버튼 클릭시
  const submitButton = document.getElementById('education_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.submit();
  });
  // // form 데이터를 가진 객체 생성/ FormData 객체 생성
  // // 폼 데이터를 추가
  // const formData = new FormData(form);
  // const data = {};
  // // form 값이 담긴 formData의 객체를 이터레이트
  // // data 객체 안에 key-value로
  // formData.forEach((value, key) => {
  // data[key] = value;
  // });
}
// 수상이력
function openAward() {
  const form = document.getElementById('awardForm');
  form.method = 'POST';
  form.action = '/mypage/award';

  const awardInput = document.createElement('input');
  awardInput.name = 'award_content';
  awardInput.className = 'input-style';
  awardInput.type = 'text';
  awardInput.placeholder = '수상 내용';
  form.appendChild(awardInput);
  form.appendChild(document.createElement('br'));

  const oraganizationInput = document.createElement('input');
  oraganizationInput.name = 'award_organization';
  oraganizationInput.className = 'input-style';
  oraganizationInput.type = 'text';
  oraganizationInput.placeholder = '시상 단체';
  form.appendChild(oraganizationInput);
  form.appendChild(document.createElement('br'));

  const awardDateInput = document.createElement('input');
  awardDateInput.name = 'award_date';
  awardDateInput.className = 'input-style';
  awardDateInput.type = 'text';
  awardDateInput.placeholder = '수상 일자';
  form.appendChild(awardDateInput);
  form.appendChild(document.createElement('br'));

  const btn = createButton('award');
  form.appendChild(btn);

  const submitButton = document.getElementById('award_submit');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.submit();
  });
}
// 프로젝트
function openProject() {
  const form = document.getElementById('projectForm');
  form.method = 'POST';
  form.action = '/mypage/project';

  const projectInput = document.createElement('input');
  projectInput.name = 'project_name';
  projectInput.className = 'input-style';
  projectInput.type = 'text';
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

  const projectRoleInput = document.createElement('input');
  projectRoleInput.name = 'project_role';
  projectRoleInput.className = 'input-style';
  projectRoleInput.type = 'text';
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
}
// 자격증
function openCertificate() {
  const form = document.getElementById('certificateForm');
  form.method = 'POST';
  form.action = '/mypage/certificate';

  const certificate = document.createElement('input');
  certificate.name = 'certificate_content';
  certificate.className = 'input-style';
  certificate.type = 'text';
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
  const certificateOrg = document.createElement('input');
  certificateOrg.name = 'certificate_organization';
  certificateOrg.className = 'input-style';
  certificateOrg.type = 'text';
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
}
// const submitButton = document.getElementById('project_submit');
// submitButton.addEventListener('click', function(e) {
// e.preventDefault();
// // form 데이터를 가진 객체 생성/ FormData 객체 생성
// // 폼 데이터를 추가
// const formData = new FormData(form);
// const data = {};
// // form 값이 담긴 formData의 객체를 이터레이트
// // data 객체 안에 key-value로
// formData.forEach((value, key) => { data[key] = value; });
// // Fetch API
// // fetch(요청 보낼 url, 요청의 구성)
// fetch(form.action, {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
// console.log('Success:', data);
// })
// .catch((error) => {
// console.error('Error:', error);
// });
// });
