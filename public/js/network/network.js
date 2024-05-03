import {GetAllUsers} from './core/networkManager.js';

document.addEventListener("DOMContentLoaded", function () {
    async function loadUsers() {
        try {
            const allUsers = await GetAllUsers(); 
            const userGrid = document.getElementById("userGrid"); 
            
            allUsers.forEach(user => {
                const card = createUserCard(user);
                userGrid.appendChild(card);
            });
        } catch (error) {
            console.error("Error while loading users:", error);
        }
    }

    function createUserCard(user) {
        const card = document.createElement("div"); 
        card.classList.add("card"); 

        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;
        card.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        card.appendChild(emailElement);

        return card;
    }

    loadUsers();
});
