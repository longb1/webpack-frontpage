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
        liContent.setAttribute("content-selector",`#nav${navBarValues[i]}`);

        liItem.addEventListener("click",function(){
            const target=document.querySelector(liContent.dataset.contentSelector)
            const isActive = document.querySelector('.active[data-tab-content]');
            if (isActive) {target.classList.remove('active')}
            target.classList.add('active');
        })
        
        liItem.appendChild(liContent);
        ulList.appendChild(liItem);
    }

    return ulList;
}
container.appendChild(navBar());
console.log(document.getElementById("navHome"))


function homePage(){
    const homeContainer= document.createElement("div");
    const homeTitle=document.createElement("h1");
    const homePara=document.createElement("p");

    homeContainer.classList.add("active"); //shows by default
    homeContainer.setAttribute("data-tab-content","");
    homeContainer.id="navHome";

    homeTitle.textContent="home page";
    homePara.textContent="this is home page welcome";

    homeContainer.append(homeTitle,homePara);
    container.append(homeContainer);
    console.log(homeContainer);

    return homeContainer
}
container.appendChild(homePage());


function aboutPage(){
    
}
function contactPage(){
    
}