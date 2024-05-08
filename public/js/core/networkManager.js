const baseUrl = "http://localhost:5000/"; // 요거 .env 파일에서 불러오는걸로 바꾸자

async function Post(data, url, successCallback, failCallback)
{
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    await fetch(`${baseUrl}${url}`, options)
    .then(response => {
        console.log(response);
        if(response.ok) return response.json();
        else throw error;
    })
    .then(data => {
        console.log(data);
        successCallback();
    })
    .catch(error => {
        failCallback();
    });
}

async function GetFromLocal(url) // 프론트 테스트용. 로컬 데이터를 가져온다.
{
    try {
        const response = await fetch(`/data/${url}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export function Login(data, successCallback, failCallback){
    Post(data, "login", successCallback, failCallback);
}

export function Register(data, successCallback, failCallback){
    Post(data, "register", successCallback, failCallback);
}

export async function GetAllUsers(){
    const userData = await GetFromLocal(`users.json`);
    return userData;
}

export async function GetUserById(id){
    const allUsers = await GetAllUsers();
    const user = allUsers.find(user => user._id === id);

    if (!user) {
        console.log("해당 ID에 해당하는 사용자 데이터를 찾을 수 없습니다.");
        return null;
    }
    return user;
}

export async function GetAwardByUserId(id){
    const awards = await GetFromLocal(`awards.json`);
    const award = awards.find(award => award.postedBy === id);

    if (!award) {
        console.log("해당 ID에 해당하는 수상 데이터를 찾을 수 없습니다.");
        return null;
    }
    return award;
}

export async function GetEducationByUserId(id){
    const educations = await GetFromLocal(`educations.json`);
    const education = educations.find(education => education.postedBy === id);

    if (!education) {
        console.log("해당 ID에 해당하는 교육 데이터를 찾을 수 없습니다.");
        return null;
    }
    return education;
}

export async function GetCertificateByUserId(id){
    const certificates = await GetFromLocal(`certificates.json`);
    const certificate = certificates.find(certificate => certificate.postedBy === id);

    if (!certificate) {
        console.log("해당 ID에 해당하는 자격증 데이터를 찾을 수 없습니다.");
        return null;
    }
    return certificate;
}

export async function GetProjectsByUserId(id){
    const projects = await GetFromLocal(`projects.json`);
    const userProjects = projects.filter(project => project.postedBy === id);

    if (userProjects.length === 0) {
        console.log("해당 ID에 해당하는 프로젝트 데이터를 찾을 수 없습니다.");
        return [];
    }
    return userProjects;
}


export default {
    Login,
    Register,

    GetAllUsers,
    GetUserById,
    GetAwardByUserId,
    GetCertificateByUserId,
    GetProjectsByUserId
};