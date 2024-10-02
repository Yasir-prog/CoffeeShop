let searchBox=document.querySelector(".search-box")
let navbar=document.querySelector(".navbar")
let header=document.querySelector("header")

active=()=>{
    searchBox.classList.toggle("active")
    navbar.classList.remove("active")
}

document.querySelector("#menu-icon").addEventListener("click",()=>{
    navbar.classList.toggle("active")
    searchBox.classList.remove("active")
})

window.addEventListener('scroll',()=>{
    navbar.classList.remove("active")
    searchBox.classList.remove("active")
})

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0)
})

