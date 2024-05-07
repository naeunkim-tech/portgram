let profiles = []; // 프로필 데이터를 저장할 배열
const profilesPerPage = 16; // 페이지당 표시할 프로필 개수
import {GetAllUsers} from '../core/networkManager.js';

// 초기 데이터를 가져오는 함수
async function fetchInitialData() {
    try {
        // networkManager의 GetAllUsers를 불러옴
        profiles = await GetAllUsers();
        
        // 초기 프로필을 렌더링
        renderProfiles(profiles.slice(0, profilesPerPage));
    } catch (error) {
        console.error('Error fetching initial data:', error);
    }
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    // 현재 스크롤 위치와 브라우저 창의 높이를 합친 값이 문서 전체의 높이와 같거나 클 때
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // 추가 데이터를 가져오는 함수 호출
        fetchMoreData();
    }
});

// 추가 데이터를 가져오는 함수
async function fetchMoreData() {
    try {
        // 여기서 추가 데이터를 불러옴
        const response = await fetch('/additional-profiles-data');
        const data = await response.json();

        // 가져온 데이터를 프로필 배열에 추가
        profiles = profiles.concat(data.profiles);

        // 표시할 프로필 결정.
        const startIndex = profiles.length - data.profiles.length; // 가져온 데이터의 시작 인덱스
        const endIndex = Math.min(profiles.length, startIndex + profilesPerPage); // 표시할 프로필의 끝 인덱스
        const displayedProfiles = profiles.slice(startIndex, endIndex);

        // 표시할 프로필을 렌더링하는 함수 호출
        renderProfiles(displayedProfiles);
    } catch (error) {
        console.error('Error fetching more data:', error);
    }
}

// 프로필을 렌더링하는 함수
function renderProfiles(profiles) {
    const profileContainer = document.getElementById('profile-container');

    // 이전에 표시된 프로필을 모두 제거
    profileContainer.innerHTML = '';

    // 프로필 렌더링
    profiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.textContent = profile.name;
        profileElement.classList.add('profile');
        
        // 프로필 클릭 이벤트 리스너 추가
        profileElement.addEventListener('click', function() {
            // 사용자의 프로필 페이지 URL 생성
            const userProfileURL = `/personal`; //URL 주소입력(개인데이터 `/user/${profile._id}` 방식으로 추가할것).
            
            // 사용자를 개인 페이지로 이동
            window.location.href = userProfileURL;
        });

        profileContainer.appendChild(profileElement);
    });
}

// 페이지 로드 시 초기 데이터를 가져옵니다.
window.addEventListener('load', fetchInitialData);