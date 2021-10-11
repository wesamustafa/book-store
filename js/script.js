// header start
// search form start
searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}
// search form end
// fixed header-2 start
function fixedHeader() {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
}
window.onscroll = () => {
    fixedHeader();
    searchForm.classList.remove("active");
}
window.onload = () => {
    fixedHeader();
}
// fixed header-2 end
// login form start
let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
}
document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
}
// login form end
// header end