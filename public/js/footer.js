// <p> 요소 생성
var copyrightP = document.createElement("p");
copyrightP.textContent = "Copyright (c) 2024 PorShaW.";
copyrightP.id = "footer"


document.querySelector("#main").insertAdjacentElement("afterend", copyrightP);