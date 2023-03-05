let enoughornot = () => {
    let LeberkasCount = document.getElementById("LeberkasCount").value;

    if (LeberkasCount < 3) {
        document.getElementById("answerSection").innerHTML = "Um Gottes Willen! Du brauchst jetzt Leberkäse. Hier findest du Metzgereien:"
        document.getElementById("meineKarte").style.visibility = "visible";
    } else if (LeberkasCount < 7) {
        document.getElementById("answerSection").innerHTML = "<br><br>Basst. Du host gnua Lebakas."
        document.getElementById("meineKarte").style.visibility = "hidden";
    } else if (LeberkasCount >= 7) {
        document.getElementById("answerSection").innerHTML = "<br><br>Sappralot! Da werd da ja schlecht!"
        document.getElementById("meineKarte").style.visibility = "hidden";
    } else {
        document.getElementByID("answerSection").innerHTML = "<br><br>Ihre Eingabe konnte leider nicht erkannt werden"
    }
}


let clearanswersection = () => {
    document.getElementById("answerSection").innerHTML = ""
}