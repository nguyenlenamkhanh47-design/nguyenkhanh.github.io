const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you for contacting Travel Explorer!"
);

});
