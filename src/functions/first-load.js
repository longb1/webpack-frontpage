function navBar(){
    const ulList= document.createElement("ul");
    const navBarValues=["Home","About","Contact"];
    for(let i=0;i<3;i++){
        const liItem= document.createElement("li");
        const liContent=document.createElement("a");

        liContent.href=`#${navBarValues[i]}`;
        liContent.textContent=navBarValues[i];
        liContent.id=`menu${navBarValues[i]}`;
        // liContent.setAttribute("data-tab-target",`#nav${navBarValues[i]}`)
        
        liItem.appendChild(liContent);
        ulList.appendChild(liItem);
    }

    return ulList;
}

export default navBar;