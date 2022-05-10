function aboutPage(){
    const aboutContainer= document.createElement("div");
    const aboutTitle=document.createElement("h1");
    const aboutPara=document.createElement("p");

    aboutContainer.setAttribute("data-tab-content","");
    aboutContainer.id="navAbout";

    aboutTitle.textContent="about page";

    aboutPara.textContent="this is about page welcome"

    aboutContainer.append(aboutTitle,aboutPara)
    return aboutContainer
}

export default aboutPage;