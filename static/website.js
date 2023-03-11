function sendData() {
    if (document.getElementById('input-disclaimer').checked == false) {
    alert("Sie müssen den Disclaimer akzeptieren, um fortzufahren"); }
    const inputVisitorsTotal = document.getElementById('input-visitors-total');
    if (updateInvalid(inputVisitorsTotal, 'input-visitors-total-invalid')) {
        return;
    }
}

function updateInvalid(element, strElAlert)
{
    if (element.value != "") {
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
        document.getElementById(strElAlert).style.display="none"
        return false;
    } else {
        element.classList.add('is-invalid')
        element.classList.remove("is-valid")
        document.getElementById(strElAlert).style.display="block"
        return true;
    }
}