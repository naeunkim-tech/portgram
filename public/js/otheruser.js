// 자격증
import {baseUrl} from './core/networkManager.js';
const education_list = document.querySelector("#education_list");
const award_list = document.querySelector("#award_list");
const project_list = document.querySelector("#project_list");
const certificate_list = document.querySelector("#license_list");
const title = document.querySelector("title")

const url = new URL(window.location.href)
const userId = url.pathname.slice(11)


const fetchData = async () => {
    const res = await fetch(`${baseUrl}/posts/${userId}`);
    const datas = await res.json();

    let edu_data = datas.education;
    let award_data = datas.award;
    let project_data = datas.project;
    let certificate_data = datas.certificate;
    let edu_output = "";
    let award_output = "";
    let project_output = "";
    let certificate_output = "";
    let title_name = "이름";

    edu_data.forEach((data) => {
        edu_output = edu_output + `<li>${data.school} | ${data.major} | ${data.degree}</li> `;
    });
    award_data.forEach((data) => {
        award_output = award_output + `<li>${data.content} | ${data.organization} | ${data.date.slice(0,10)}</li> `;
    });
    project_data.forEach((data) => {
        project_output = project_output + `<li>${data.title} | ${data.startDate.slice(0,10)} ~ ${data.endDate.slice(0,10)} | ${data.role}</li> `;
    });
    certificate_data.forEach((data) => {
        certificate_output = certificate_output + `<li>${data.type} | ${data.authority} | ${data.date.slice(0,10)}</li> `;
    });

    education_list.innerHTML = edu_output;
    award_list.innerHTML = award_output;
    project_list.innerHTML = project_output;
    certificate_list.innerHTML = certificate_output;
    title.innerHTML = `${title_name} - Portgram`
    console.log("update success")
};


window.addEventListener("DOMContentLoaded", fetchData())