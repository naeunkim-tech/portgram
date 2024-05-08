import { createDeleteButton } from './deleteButton.js';
import { deleteDataOnServer } from './deleteButton.js';

export function newInfo(getData, addedName, info) {
  const displayElement = document.getElementById(addedName);

  const parentList = document.createElement('ul');
  const list = document.createElement('li');

  if (info === 'education') {
    const school = getData.school;
    const major = getData.major;
    const degree = getData.degree;

    list.textContent = `학교: ${school} | 전공: ${major} | 학위: ${degree}`;
  } else if (info === 'award') {
    const content = getData.content;
    const organization = getData.organization;
    const date = getData.date;

    list.textContent = `수상 내용: ${content} | 시상 단체: ${organization} | 수상 일자: ${date.slice(
      0,
      10
    )}`;
  } else if (info === 'certification') {
    const type = getData.type;
    const certificatedate = getData.date;
    const authority = getData.authority;

    list.textContent = `자격 종류: ${type} | 발급 일자: ${certificatedate.slice(
      0,
      10
    )} | 발급 기관: ${authority}`;
  } else if (info === 'project') {
    const title = getData.title;
    const startDate = getData.startDate;
    const endDate = getData.endDate;
    const role = getData.role;

    list.textContent = `프로젝트명: ${title} | 프로젝트 기간: ${startDate.slice(
      0,
      10
    )} ~ ${endDate.slice(0, 10)} | 역할: ${role}`;
  }

  // 삭제 버튼
  const deleteButton = createDeleteButton(
    info,
    deleteDataOnServer,
    getData,
    parentList,
    list,
    displayElement
  );

  list.appendChild(deleteButton);
  parentList.appendChild(list);
  displayElement.appendChild(parentList);
}
