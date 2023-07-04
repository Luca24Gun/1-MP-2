// Script pour le curseur personnalisé 

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

document.querySelector("model-viewer").addEventListener("mouseover", cursorNone);

function cursorNone(){
    document.querySelector('.cursor').style.display = "none";
}

document.querySelector("model-viewer").addEventListener("mouseout", cursorYes);

function cursorYes(){
    document.querySelector('.cursor').style.display = "block";
}

// Script pour le selecteur de caractère

var allLi = document.querySelectorAll(".set li");

for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
        document.getElementById("demo").innerHTML = this.textContent;
    });
}
