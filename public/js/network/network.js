import { GetAllUsers } from '../core/networkManager.js';  //user 데이터 저장공간


let loadedUsers = []; // 로드된 사용자 목록을 저장할 배열
let isLoading = false; // 추가 데이터 로딩 중인지 여부
const countData = 16; // 로딩되는 데이터 수

// 사용자를 화면에 렌더링하는 함수
function renderUsers(users) {
    const userListDiv = document.getElementById('userList'); 
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userProfile');
        const nameEmailDiv = document.createElement('div');
        nameEmailDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userDiv.addEventListener('click', () => {
            window.location.href = "#";                                          // 프로필 링크 이동
        });
        userDiv.appendChild(nameEmailDiv);
        userListDiv.appendChild(userDiv);
    });
}

// 초기 사용자 로드 함수
window.onload = async () => {
    const initialUsers = await GetAllUsers();
    const initialUsersToShow = initialUsers.slice(0, countData); // 처음 16개만 호출
    loadedUsers = initialUsersToShow;
    renderUsers(initialUsersToShow);
    window.addEventListener('scroll', handleScroll);
};

// 스크롤 이벤트 핸들러
async function handleScroll() {
    // 스크롤이 화면 하단에 도달했을 때
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 현재 로드된 사용자의 수를 기준으로 추가 사용자를 로드하고 화면에 렌더링
        const startIndex = loadedUsers.length;
        const additionalUsers = await loadMoreUsers(startIndex, countData); //api 

        // 결과가 이상하다?
        // 1. api가 이상한가? - 
        // 2. 파라미터를 잘못보냇나?

        
        if (additionalUsers.length === 0) {
            // 저장된 데이터를 모두 불러왔을 경우 스크롤 이벤트 제거
            window.removeEventListener('scroll', handleScroll);
            return additionalUsers;
        }
        loadedUsers = loadedUsers.concat(additionalUsers);
        renderUsers(additionalUsers);
     }
}

// 추가적인 사용자 로드 함수
async function loadMoreUsers(startIndex, countData) {
    if (isLoading) return; // 이미 로딩 중이면 중복 요청 방지
    isLoading = true;
    const additionalUsers = await GetAllUsers(startIndex, countData);
    console.log(additionalUsers)
    isLoading = false;
    return additionalUsers;
}
