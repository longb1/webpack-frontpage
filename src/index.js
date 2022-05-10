import './style.css';
const container=document.getElementById("container")


function navBar(){
    const ulList= document.createElement("ul");
    const navBarValues=["Home","About","Contact"];
    for(let i=0;i<3;i++){
        const liItem= document.createElement("li");
        const liContent=document.createElement("a");
        

        liContent.href=`#${navBarValues[i]}`;
        liContent.textContent=navBarValues[i];
        liContent.setAttribute("data-tab-target",`#nav${navBarValues[i]}`)
        
        liContent.addEventListener("click",function(){
            const allActiveContent=document.querySelectorAll("[data-tab-content]");
            const contentSelector=document.querySelector(liContent.dataset.tabTarget);

            allActiveContent.forEach(element => {
                element.classList.remove("active")
            });
            
            contentSelector.classList.add("active")
        })

        liItem.appendChild(liContent);
        ulList.appendChild(liItem);
    }

    return ulList;
}



function homePage(){
    const homeContainer= document.createElement("div");
    const homeTitle=document.createElement("h1");
    const homePara=document.createElement("p");

    homeContainer.setAttribute("data-tab-content","");
    homeContainer.classList.add("active")
    homeContainer.id="navHome";

    homeTitle.textContent="home page";

    homePara.textContent="this is home page welcome"

    homeContainer.append(homeTitle,homePara)
    return homeContainer
}

function aboutPage(){
    
}
function contactPage(){
    
}

container.appendChild(navBar());

container.appendChild(homePage());
