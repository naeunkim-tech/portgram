import { addEdu } from './personal/addEdu.js';
import { addAward } from './personal/addAward.js';
import { addProject } from './personal/addProject.js';
import { addCertificate } from './personal/addCertificate.js';
import { postData } from './personal/postData.js';
import { fetchMypageData } from './personal/fetchMypage.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchMypageData();
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addEdu').addEventListener('click', addEdu);

  const form = document.getElementById('educationForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postData('educationForm', 'addedEducation', 'education');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addAward').addEventListener('click', addAward);

  const form = document.getElementById('awardForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postData('awardForm', 'addedAward', 'award');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('addCertificate')
    .addEventListener('click', addCertificate);

  const form = document.getElementById('certificateForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postData('certificateForm', 'addedCertificate', 'certification');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addProject').addEventListener('click', addProject);

  const form = document.getElementById('projectForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postData('projectForm', 'addedProject', 'project');
  });
});
