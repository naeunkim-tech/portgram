import { addEdu } from './personal/addEdu.js';
import { addAward } from './personal/addAward.js';
import { addProject } from './personal/addProject.js';
import { addCertificate } from './personal/addCertificate.js';
import { postData } from './personal/postData.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addEdu').addEventListener('click', addEdu);
  document.getElementById('education_submit').addEventListener('click', (e) => {
    e.preventDefault();
    postData('educationForm');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addAward').addEventListener('click', addAward);
  document.getElementById('education_submit').addEventListener('click', (e) => {
    e.preventDefault();
    postData('awardForm');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('addCertificate')
    .addEventListener('click', addCertificate);
  document.getElementById('education_submit').addEventListener('click', (e) => {
    e.preventDefault();
    postData('certificateForm');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addProject').addEventListener('click', addProject);
  document.getElementById('education_submit').addEventListener('click', (e) => {
    e.preventDefault();
    postData('projectForm');
  });
});
