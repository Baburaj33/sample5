// navigation item show

const menuicon = document.querySelector("#menu");
menuicon.addEventListener("click", () => {
    const navItem = document.querySelector(".navItem");
    navItem.classList.toggle('navshow');
})

// // create a confetti animation using npm.js library
document.addEventListener("DOMContentLoaded", function () {
    const register = document.querySelector("#CourseRegister");
    let isconfettiActive = false;
    let confettiInstance = null;
    // add the click event Listner to the button
    register.addEventListener("click", () => {
        register.textContent = "Done"
        if (!isconfettiActive) {

            // start confetti animation active
            // Access the JSconfetti global variable
            const confetti = new JSConfetti();
            // call the methode on the confetti object
            confetti.addConfetti();
        }
        else {
            // stop confetti animation
            if (confettiInstance) {
                confettiInstance.clear();
            }
        }
        isconfettiActive = !isconfettiActive;
    })

})


// online class
// demo class
const Democlassbtn = document.querySelector("#Democlassbtn");
Democlassbtn.addEventListener("click",()=>{
    alert("Tomorrow morning 10 clock you have a Demo class")
}) 

// course Entroll
const PythonEntroll = document.querySelector("#PythonEntroll");
PythonEntroll.addEventListener("click",()=>{
    PythonEntroll.textContent = "Enrolled"
    alert("You successfully Entrolled Python course")
})

// frondendEntroll
const frondendEntroll = document.querySelector("#frondendEntroll");
frondendEntroll.addEventListener("click",()=>{
    frondendEntroll.textContent = "Enrolled"
    alert('you successfully Entrolled frond-end developer course ')
})
// javascriptEntroll
const javascriptEntroll = document.querySelector("#javascriptEntroll");
javascriptEntroll.addEventListener("click",()=>{
    javascriptEntroll.textContent = "Enrolled"
    alert('you successfully Entrolled javascript course ')
})
// Gallery section

// get refernce in html element

const showGallagery = document.querySelector("#showGallagery");
showGallagery.addEventListener("click",()=>{
    const galleryContainer = document.querySelector("#galleryContainer");
    galleryContainer.classList.toggle("showGalleryImg")
})


// contact info btn click send loading animation
const contactsend = document.querySelector("#contactsend");
contactsend.addEventListener("click",()=>{
   contactsend.textContent = "Sending";
    // set the timeout to revert the button text back to original text after click
    setTimeout(()=>{
        contactsend.innerText = "send it";
    },4000) 
})


