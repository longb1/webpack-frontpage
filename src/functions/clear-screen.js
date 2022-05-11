const clear = function(){
    const content = document.querySelector('#container');
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

export default clear;