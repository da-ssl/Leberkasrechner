let enoughornot = () => {
    let execute = true;
    let LeberkasCount = document.getElementById("LeberkasCount").value;
    let LeberkasCountArr = Array.from(LeberkasCount);
    
    if (execute) {
        if (LeberkasCount < 3) {
            document.getElementById("answerSection").innerHTML = "Um Gottes Willen! Du brauchst jetzt Leberkäse. Hier findest du Metzgereien:"
            document.getElementById("meineKarte").style.visibility = "visible";
        } else if (LeberkasCount < 7) {
            document.getElementById("answerSection").innerHTML = "<br><br>Basst. Du host gnua Lebakas."
            document.getElementById("meineKarte").style.visibility = "hidden";
        } else if (LeberkasCount > 7) {
            document.getElementById("answerSection").innerHTML = "<br><br>Sappralot! Da werd da ja schlecht!"
            document.getElementById("meineKarte").style.visibility = "hidden";
        }
    }
}


let clearanswersection = () => {
    document.getElementById("answerSection").innerHTML = ""
}
