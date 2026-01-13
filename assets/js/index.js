window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none"
;});
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("open");
});
document.getElementById("scrollProject").onclick=()=>{
    document.getElementById("projects").scrollIntoView({
        behavior:"smooth"
    });
}
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

document.querySelectorAll(".animate").forEach(el=>observer.observe(el));