// 자격증
const education_list = document.querySelector("#education_list");
const award_list = document.querySelector("#award_list");
const project_list = document.querySelector("#project_list");
const certificate_list = document.querySelector("#license_list");

const url = new URL(window.location.href)
const pId = url.searchParams.get("postId");
document.write(pId)
const test = () => {
    console.log(pId)
}

const fetchData = async () => {
    // const res = await fetch(`https://localhost:5000/posts/${pId}`);
    const res = await fetch("data.json");
    const datas = await res.json();


    let edu_data = datas.education;
    let award_data = datas.award;
    let project_data = datas.project;
    let certificate_data = datas.certificate;
    let edu_output = "";
    let award_output = "";
    let project_output = "";
    let certificate_output = "";

    edu_data.forEach((data) => {
        edu_output = edu_output + `<li>${data.school} | ${data.major} | ${data.degree}</li> `;
    });
    award_data.forEach((data) => {
        award_output = award_output + `<li>${data.content} | ${data.organization} | ${data.date}</li> `;
    });
    project_data.forEach((data) => {
        project_output = project_output + `<li>${data.title} | ${data.startDate} | ${data.endDate} | ${data.role}</li> `;
    });
    certificate_data.forEach((data) => {
        certificate_output = certificate_output + `<li>${data.type} | ${data.authority} | ${data.date}</li> `;
    });
    console.log(edu_output,award_output,project_output,certificate_output)
    education_list.innerHTML = edu_output;
    award_list.innerHTML = award_output;
    project_list.innerHTML = project_output;
    certificate_list.innerHTML = certificate_output;
};


window.addEventListener("DOMContentLoaded", fetchData())