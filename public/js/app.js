
const header = document.querySelector("header");
const toggle_btn = document.querySelector(".toggle-btn");


/*------------- Sticky Navbar --------------*/
function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar()
window.addEventListener("scroll", stickyNavbar);

/*------------- Scroll reveal --------------*/

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme)
function  changeTheme(isdark){
    if(isdark){
        document.body.classList.add( "dark")
        toggle_btn.classList.replace("uil-moon", "uil-sun")
        localStorage.setItem("dark",1)
    }else{
        document.body.classList.remove( "dark")
        toggle_btn.classList.replace("uil-sun", "uil-moon")
        localStorage.setItem("dark",0)
    }
}


toggle_btn.addEventListener("click", ()=>{
    changeTheme(!document.body.classList.contains("dark"));
})
