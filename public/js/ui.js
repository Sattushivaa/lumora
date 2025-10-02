let arr = document.querySelectorAll("menu li ul");
arr.forEach(el=>{
    el.addEventListener("click",e=>{
        document.querySelector("menu li ul.active").classList.remove("active");
        el.classList.add("active");
    })
})