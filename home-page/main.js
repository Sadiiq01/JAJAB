let burger = document.querySelector(".burger");
let navigationBar = document.querySelector(".navigation-bar");
let i = document.querySelector(".navigation-bar ul i");
burger.addEventListener("click", () => {
    navigationBar.classList.toggle('active')
});

i.addEventListener("click", ("click", () => {
    navigationBar.classList.remove('active')
})
 );

 

