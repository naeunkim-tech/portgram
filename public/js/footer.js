var newElement = document.createElement("nav")
newElement.className = "underbar";

newElement.innerHTML = `
    <p>copyright@PorShaW</p>     
`;


document.querySelector("#main").insertAdjacentHTML("afterend", newElement);