
const userName = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

function updateDisplayName(name) {
    displayName.textContent = name ? `${greeting()}, ${name}!` : "";
}

saveBtn.addEventListener("click", function () {
    let name = userName.value.trim();
    if (name) {
        localStorage.setItem("savedName", name);
        updateDisplayName(name)
    }
})

clearBtn.addEventListener("click", function () {
    localStorage.removeItem("savedName");
    updateDisplayName("");
    userName.value = "";
})

document.addEventListener("DOMContentLoaded", function () {
    let savedName = localStorage.getItem("savedName")
    if (savedName) {
        updateDisplayName(savedName);
        userName.value = savedName;
    }
})

function greeting() {
    let hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
}

