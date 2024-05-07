import { GetAllUsers } from '../core/networkManager.js';  //user 데이터 저장공간


let loadedUsers = []; // 로드된 사용자 목록을 저장할 배열

// 데이터를 표시하는 함수
async function displayUsers() {
    // 처음 페이지가 열릴 때는 처음 16개의 데이터만 불러옴
    loadedUsers = await loadMoreUsers(0, 16);
    renderUsers(loadedUsers);
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
}

// 추가적인 사용자를 로드하는 함수
async function loadMoreUsers(startIndex, count) {
    const additionalUsers = await GetAllUsers(startIndex, count);
    return additionalUsers;
}

// 사용자를 화면에 렌더링하는 함수
function renderUsers(users) {
    const userListDiv = document.getElementById('userList');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userProfile');
        const nameEmailDiv = document.createElement('div');
        nameEmailDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userDiv.appendChild(nameEmailDiv);
        userListDiv.appendChild(userDiv);
    });
}

// 스크롤 이벤트 핸들러
async function handleScroll() {
    // 스크롤이 화면 하단에 도달했을 때
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 현재 로드된 사용자의 수를 기준으로 추가 사용자를 로드하고 화면에 렌더링
        const startIndex = loadedUsers.length;
        const additionalUsers = await loadMoreUsers(startIndex, 16);
        renderUsers(additionalUsers);
    }
}

// 페이지가 로드될 때 사용자 목록을 표시
window.onload = displayUsers;