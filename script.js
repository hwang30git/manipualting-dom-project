let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let dnButton = document.getElementById("dn-button");

let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let dnDiv = document.getElementById("dn-div");
dnDiv.style.display = "none";

let pCount = document.getElementById("p-count");
let imgCount = document.getElementById("img-count");
let dnCount = document.getElementById("dn-count");

let pCounter = 0;
let imgCounter = 0;
let dnCounter = 0;

let paragraphs = ["hello", "hola", "bonjour", "guten tag", "salve", "konnichiwa"];

pButton.onclick = function () {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    dnDiv.style.display = "none";

    let newP = document.createElement("p");
    let random = Math.floor(Math.random() * paragraphs.length);
    newP.innerHTML = paragraphs[random];
    newP.style.border = "2px solid blue";
    pDiv.appendChild(newP);

    pCounter++;
    pCount.innerHTML = "pCount: " + pCounter;
}

let images = ["images/charmander.png", "images/squirtle.png", "images/bulbasaur.png", "images/pikachu.png"];

imgButton.onclick = function () {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
    dnDiv.style.display = "none";

    let newImg = document.createElement("img");
    let random = Math.floor(Math.random() * images.length);
    newImg.src = images[random];
    newImg.style.width = "200px";
    imgDiv.appendChild(newImg);

    imgCounter++;
    imgCount.innerHTML = "imgCount: " + imgCounter;
}

dnButton.onclick = function () {
    dnDiv.style.display = "block";
    pDiv.style.display = "none";
    imgDiv.style.display = "none";

    dnCounter++;
    dnCount.innerHTML = "nothingCount: " + dnCounter;
}