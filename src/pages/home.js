function homePage(){
    const homeContainer= document.createElement("div");
    const homeTitle=document.createElement("h1");
    const homePara=document.createElement("p");

    homeContainer.id="navHome";

    homeTitle.textContent="home page";

    homePara.textContent="this is home page welcome"

    homeContainer.append(homeTitle,homePara)
    return homeContainer
}

export default homePage;