// 새로운 <nav> 요소 생성
var newElement = document.createElement("nav");
newElement.className = "underbar";

// <p> 요소 생성
var copyrightP = document.createElement("p");
copyrightP.textContent = "copyright@PorShaW";

// <p> 요소를 <nav>에 추가
newElement.appendChild(copyrightP);


document.querySelector("#main").insertAdjacentElement("afterend", newElement);