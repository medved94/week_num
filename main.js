Date.prototype.getWeek = function () {
    let onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()) / 7);
}

window.onload = function () {
    setTimeout('document.location.reload(true)', 86400000);
    let weekNumber = (new Date()).getWeek();
    //var now = new Date();
    document.getElementById("num").innerHTML = weekNumber;

}

function show() {
    let x = document.getElementById("snoop");
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

