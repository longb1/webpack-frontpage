liContent.addEventListener("click",function(){
    const allActiveContent=document.querySelectorAll("[data-tab-content]");
    const contentSelector=document.querySelector(liContent.dataset.tabTarget);

    allActiveContent.forEach(element => {
        element.classList.remove("active")
    });
    
    contentSelector.classList.add("active")
})