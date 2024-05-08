var newElement = document.createElement("Header")

var newElement = document.createElement("nav");
newElement.className = "navbar";

// <div class="navbar_Home"> 요소 생성
var homeDiv = document.createElement("div");
homeDiv.className = "navbar_Home";
var homeLink = document.createElement("a");
homeLink.href = "#";
homeLink.textContent = "안녕하세요. 포트폴리오 공유 서비스입니다.";
homeDiv.appendChild(homeLink);

// <ul class="navbar_menu"> 요소 생성
var menuUl = document.createElement("ul");
menuUl.className = "navbar_menu";

// 각 메뉴 아이템 생성
var networkLi = document.createElement("li");
var networkLink = document.createElement("a");
networkLink.href = "#";
networkLink.textContent = "네트워크";
networkLi.appendChild(networkLink);

var myPageLi = document.createElement("li");
var myPageLink = document.createElement("a");
myPageLink.href = "#";
myPageLink.textContent = "나의 페이지";
myPageLi.appendChild(myPageLink);

var logoutLi = document.createElement("li");
var logoutLink = document.createElement("a");
logoutLink.href = "/logout";
logoutLink.textContent = "로그아웃";
logoutLi.appendChild(logoutLink);

// 각 메뉴 아이템을 <ul>에 추가
menuUl.appendChild(networkLi);
menuUl.appendChild(myPageLi);
menuUl.appendChild(logoutLi);

// 생성된 요소들을 조립하여 새로운 <nav> 요소에 추가
newElement.appendChild(homeDiv);
newElement.appendChild(menuUl);

document.querySelector("#main").insertAdjacentElement("beforebegin", newElement);