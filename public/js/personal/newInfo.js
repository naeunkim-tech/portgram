import { createDeleteButton } from './deleteButton.js';
import { deleteDataOnServer } from './deleteButton.js';
import { createEditButton, editedInfo } from './editButton.js';
import { editCompleteBtn } from './editCompleteBtn.js';
import { putData } from './putData.js';

export function newInfo(form, getData, addedName, info) {
  const displayElement = document.getElementById(addedName);

  const parentList = document.createElement('ul');
  const list = document.createElement('li');

  if (info === 'education') {
    let school = getData.school;
    let major = getData.major;
    let degree = getData.degree;

    list.textContent = `학교: ${school} | 전공: ${major} | 학위: ${degree}`;
  } else if (info === 'award') {
    let content = getData.content;
    let organization = getData.organization;
    let date = getData.date;

    list.textContent = `수상 내용: ${content} | 시상 단체: ${organization} | 수상 일자: ${date.slice(
      0,
      10
    )}`;
  } else if (info === 'certification') {
    let type = getData.type;
    let certificatedate = getData.date;
    let authority = getData.authority;

    list.textContent = `자격 종류: ${type} | 발급 일자: ${certificatedate.slice(
      0,
      10
    )} | 발급 기관: ${authority}`;
  } else if (info === 'project') {
    let title = getData.title;
    let startDate = getData.startDate;
    let endDate = getData.endDate;
    let role = getData.role;

    list.textContent = `프로젝트명: ${title} | 프로젝트 기간: ${startDate.slice(
      0,
      10
    )} ~ ${endDate.slice(0, 10)} | 역할: ${role}`;
  }

  const list2 = document.createElement('li');
  list2.className = 'editContainer';

  const list3 = document.createElement('li');
  list3.className = 'editContainer';
  // 수정 버튼
  const editButton = createEditButton(form, getData, list, info);
  // 수정 버튼 이벤트
  editButton.addEventListener('click', () => {
    // 수정 input
    const editedInformation = editedInfo(list, getData, info);
    parentList.removeChild(list2);

    // 저장 버튼
    const editConfirmBtn = editCompleteBtn(info);

    editedInformation.addEventListener('submit', (e) => {
      e.preventDefault(); // 기본 폼 제출 동작 방지

      // info 값에 따라 다른 데이터 처리 함수를 호출합니다.
      switch (info) {
        case 'education':
          putData(
            `${info}_form`,
            'addedEducation',
            info,
            getData.userId,
            getData._id
          );
          break;
        case 'award':
          putData(
            `${info}_form`,
            'addedAward',
            info,
            getData.userId,
            getData._id
          );
          break;
        case 'certification':
          putData(
            `${info}_form`,
            'addedCertificate',
            info,
            getData.userId,
            getData._id
          );
          break;
        case 'project':
          putData(
            `${info}_form`,
            'addedProject',
            info,
            getData.userId,
            getData._id
          );
          break;
        default:
          console.log('Unknown info type');
      }
    });

    editedInformation.appendChild(editConfirmBtn);
    list3.appendChild(editedInformation);
    // displayElement.appendChild(editedInformation);
    displayElement.appendChild(list3);
  });

  // 삭제 버튼
  const deleteButton = createDeleteButton(
    info,
    deleteDataOnServer,
    getData,
    parentList,
    list,
    list2,
    displayElement
  );

  list2.appendChild(editButton);
  list2.appendChild(deleteButton);
  parentList.appendChild(list);
  parentList.appendChild(list2);
  displayElement.appendChild(parentList);
}
