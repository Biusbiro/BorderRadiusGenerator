function masterChange() {
    var value = document.getElementById("master").value;
    document.getElementById("demo").innerHTML = value;
    console.log(value)
}

function topLeftChange() {
    var value = document.getElementById("top-left").value;
    document.getElementById("topLeft").innerHTML = value;
    console.log(value)
}

function topRightChange() {
    var value = document.getElementById("top-right").value;
    document.getElementById("topRight").innerHTML = value;
    console.log(value)
}

function bottomLeftChange() {
    var value = document.getElementById("bottom-left").value;
    document.getElementById("bottomLeft").innerHTML = value;
    console.log(value)
}

function bottomRightChange() {
    var value = document.getElementById("bottom-right").value;
    document.getElementById("bottomRight").innerHTML = value;
}