let close=document.querySelector('i');
let hideWrapper=document.querySelector('.wrapper');
close.addEventListener('click',()=>{
    if (hideWrapper.style.display === "none") {
        hideWrapper.style.display = "block";
    } else {
        hideWrapper.style.display = "none";
    }
})