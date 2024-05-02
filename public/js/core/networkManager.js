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
        if(response.ok)
            return response.json();
    })
    .then(data => {
        console.log(data);
        successCallback();
    })
    .catch(error => {
        console.error('Error:', error.message);
        failCallback();
    });
}

export function Login(data, successCallback, failCallback){
    Post(data, "", successCallback, failCallback);
}

export function Register(data, successCallback, failCallback){
    Post(data, "register", successCallback, failCallback);
}

export default {
    Login,
    Register
};