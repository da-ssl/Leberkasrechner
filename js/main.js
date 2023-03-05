let enoughornot = () => {
    let LeberkasCount = document.getElementById("LeberkasCount").value;
    let answerSection = document.getElementById("answerSection");
    let Map = document.getElementById("meineKarte");

    if (LeberkasCount < 3) {
        answerSection.innerHTML = "Um Gottes Willen! Du brauchst jetzt Leberkäse. Hier findest du Metzgereien:"
        Map.style.visibility = "visible";
    } else if (LeberkasCount < 7) {
        answerSection.innerHTML = "<br><br>Basst. Du host gnua Lebakas."
        Map.style.visibility = "hidden";
    } else if (LeberkasCount >= 7) {
        answerSection.innerHTML = "<br><br>Sappralot! Da werd da ja schlecht!"
        Map.style.visibility = "hidden";
    }
}