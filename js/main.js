let enoughornot = () => {
    let execute = true;
    let LeberkasCount = document.getElementById("LeberkasCount").value;
    let LeberkasCountArr = Array.from(LeberkasCount);
    
    if (execute) {
        if (LeberkasCount < 2) {
            document.getElementById("answerSection").innerHTML = "<br><br>Du hast zu wenig <br><br><br><br>"
            document.getElementById("meineKarte").style.visibility = "visible";
        } else if (LeberkasCount < 5) {
            document.getElementById("answerSection").innerHTML = "<br><br>Du hast genung"
            document.getElementById("meineKarte").style.visibility = "hidden";
        } else {
            document.getElementById("answerSection").innerHTML = "<br><br>Da wird dir ja schlecht"
            document.getElementById("meineKarte").style.visibility = "hidden";
        }
    }
}


let clearanswersection = () => {
    document.getElementById("answerSection").innerHTML = ""
}