import './style.css';
import navBar from "./functions/first-load.js";
import clear from "./functions/clear-screen.js";
import homePage from './pages/home.js';
import aboutPage from './pages/about.js';
import contactPage from './pages/contact.js';

const container=document.getElementById("container")

container.appendChild(navBar());

const homeButton =document.getElementById("menuHome")
const aboutButton=document.getElementById("menuAbout")
const contactButton=document.getElementById("menuContact")

homeButton.addEventListener("click",function(){
    clear()
    container.appendChild(homePage())
})

aboutButton.addEventListener("click",function(){
    clear()
    container.appendChild(aboutPage())
})
contactButton.addEventListener("click",function(){
    clear()
    container.appendChild(contactPage())
})




