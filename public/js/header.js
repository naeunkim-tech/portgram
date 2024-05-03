var newElement = document.createElement("nav")
newElement.className = "navbar";

newElement.innerHTML = `
    <div class="navbar_Home">
        <a href="#">안녕하세요. 포트폴리오 공유 서비스입니다.</a>
    </div>

    <ul class="navbar_menu">
        <li><a href="network/network.html">네트워크</a></li>
        <li><a href="#">나의 페이지</a></li>
        <li><a href="index.html">로그아웃</a></li>
    </ul>       
`;
// 이한수님의 작업인데 오선아(팀장)가 원활한 페이지 확인을 위해 수정했습니다. 
//원래 insertAdjacentHTML 으로 해주셨는데 화면에 표시가 되지않는 문제가 있어 임시로 이렇게 바꾸었습니다.
document.querySelector("#main").insertAdjacentElement("afterbegin", newElement); 