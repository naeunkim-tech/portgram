var newElement = document.createElement("nav")
newElement.className = "navbar";

newElement.innerHTML = `
    <div class="navbar_Home">
        <a href="#">안녕하세요. 포트폴리오 공유 서비스입니다.</a>
    </div>

    <ul class="navbar_menu">
        <li><a href="#">네트워크</a></li>
        <li><a href="#">나의 페이지</a></li>
        <li><a href="#">로그아웃</a></li>
    </ul>       
`;


document.querySelector("#main").insertAdjacentHTML("beforebegin", newElement);