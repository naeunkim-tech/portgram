var newElement = document.createElement("Header")

var newElement = document.createElement("nav");
newElement.className = "navbar";

// <div class="navbar_Home"> 요소 생성
var homeDiv = document.createElement("div");
homeDiv.className = "navbar_Home";
var homeLink = document.createElement("a");
homeLink.href = "/networked";
var homeImg = document.createElement("img");
homeImg.id = "home_img"
homeImg.src = "/img/portgram_title.png"
homeImg.alt = "PORSHAW"
homeLink.appendChild(homeImg)
homeDiv.appendChild(homeLink);

// <ul class="navbar_menu"> 요소 생성
var menuUl = document.createElement("ul");
menuUl.className = "navbar_menu";

// 각 메뉴 아이템 생성
var networkLi = document.createElement("li");
var networkLink = document.createElement("a");
var networkImg = document.createElement("img")
var networkP = document.createElement("p")
networkLink.href = "/networked";
networkImg.src = "/img/network_icon.png"
networkP.textContent = "네트워크"
networkLink.appendChild(networkImg)
networkLink.appendChild(networkP)
networkLi.appendChild(networkLink);

var myPageLi = document.createElement("li");
var myPageLink = document.createElement("a");
var myPageImg = document.createElement("img")
var myPageP = document.createElement("p")
myPageLink.href = "/personal";
myPageImg.src = "/img/my_page_icon.png"
myPageP.textContent = "마이페이지"
myPageLink.appendChild(myPageImg)
myPageLink.appendChild(myPageP)
myPageLi.appendChild(myPageLink);

var logoutLi = document.createElement("li");
var logoutLink = document.createElement("a");
var logoutImg = document.createElement("img")
var logoutP = document.createElement("p")
logoutLink.href = "/logout";
logoutImg.src = "/img/logout_icon.png"
logoutP.textContent = "로그아웃"
logoutLink.appendChild(logoutImg)
logoutLink.appendChild(logoutP)
logoutLi.appendChild(logoutLink);

// 각 메뉴 아이템을 <ul>에 추가
menuUl.appendChild(networkLi);
menuUl.appendChild(myPageLi);
menuUl.appendChild(logoutLi);

// 생성된 요소들을 조립하여 새로운 <nav> 요소에 추가
newElement.appendChild(homeDiv);
newElement.appendChild(menuUl);


document.querySelector("#main").insertAdjacentElement("beforebegin", newElement);