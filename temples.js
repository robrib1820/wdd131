const lastModified = document.lastModified;

document.getElementById("lastModified").innerText = `© Robson Ribeiro - all rights reserved - Last time modified:${lastModified}`;

const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");


hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
})