import './style.css';
const container=document.getElementById("container")


function navBar(){
    const ulList= document.createElement("ul");
    // ulList.classList.add("navBarUl");
    const navBarValues=["Home","About","Contact"];
    for(let i=0;i<3;i++){
        const liItem= document.createElement("li");
        const liContent=document.createElement("a");

        liContent.href=`#${navBarValues[i]}`
        liContent.textContent=navBarValues[i];
        liContent.id=`nav${navBarValues[i]}`
        
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
    homeTitle.textContent="home page";
    homeContainer.setAttribute("data-tab-content","");
    homePara.textContent="this is home page welcome"

    homeContainer.append(homeTitle,homePara)
    container.append(homeContainer)
    console.log(homeContainer)
}
homePage()


function aboutPage(){
    
}
function contactPage(){
    
}