function contactPage(){
    const contactContainer= document.createElement("div");
    const contactTitle=document.createElement("h1");
    const contactPara=document.createElement("p");

    contactContainer.setAttribute("data-tab-content","");
    contactContainer.id="navContact";

    contactTitle.textContent="contact page";

    contactPara.textContent="this is contact page welcome"

    contactContainer.append(contactTitle,contactPara)
    return contactContainer
}

export default contactPage;