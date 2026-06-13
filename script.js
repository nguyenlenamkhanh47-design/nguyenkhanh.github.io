const themeBtn = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");
const contactForm = document.getElementById("contactForm");

/* DARK MODE */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️ Light Mode";
    }else{
        themeBtn.textContent = "🌙 Dark Mode";
    }

});

/* BACK TO TOP */

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* CONTACT FORM */

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(
        name === "" ||
        email === "" ||
        message === ""
    ){
        alert("Please fill in all fields.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your message has been sent successfully."
    );

    contactForm.reset();

});

/* IMAGE HOVER ANIMATION */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1)";

    });

});
