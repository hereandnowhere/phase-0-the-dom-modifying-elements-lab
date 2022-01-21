const main = document.querySelector(`main`);
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute(`id`,`victory`);
newHeader.innerHTML = 
    "<h1 id = victory> JACOB is the champion </h1>";
document.head.append(newHeader);
