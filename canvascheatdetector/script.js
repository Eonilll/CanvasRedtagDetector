function checkFocus() {
    if (!(document.hasFocus())) {
        RedchangeStatus();
    } 
}

function RedchangeStatus(){
    document.getElementById("statusicon").textContent = "🚩DETECTED!";
    document.getElementById("statusdesc").textContent = "The simulation has triggered a RED-FLAG, Press the Reset Status button to try again.";
} 

function resetStatusLods(){
    document.getElementById("statusicon").textContent = "🟢SAFE >W<";
    document.getElementById("statusdesc").textContent = "This site simulates a Canvas quiz and will inform the user if a Red-Flag is triggered.";
}

resetStatusLods();

setInterval(checkFocus, 50); 
