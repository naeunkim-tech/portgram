import { addEdu } from './personal/addEdu.js';
import { addAward } from './personal/addAward.js';
import { addProject } from './personal/addProject.js';
import { addCertificate } from './personal/addCertificate.js';
import { fetchMypageData } from './personal/fetchMypage.js';
import { pageLoad } from './personal/pageLoad.js';

// 초기 개인페이지
document.addEventListener('DOMContentLoaded', () => {
  fetchMypageData();
});
// 학력
document.addEventListener('DOMContentLoaded', () => {
  pageLoad('addEdu', addEdu, 'educationForm', 'addedEducation', 'education');
});
// 수상이력
document.addEventListener('DOMContentLoaded', () => {
  pageLoad('addAward', addAward, 'awardForm', 'addedAward', 'award');
});
// 프로젝트
document.addEventListener('DOMContentLoaded', () => {
  pageLoad('addProject', addProject, 'projectForm', 'addedProject', 'project');
});
// 자격증
document.addEventListener('DOMContentLoaded', () => {
  pageLoad(
    'addCertificate',
    addCertificate,
    'certificateForm',
    'addedCertificate',
    'certification'
  );
});
