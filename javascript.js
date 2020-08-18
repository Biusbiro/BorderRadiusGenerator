function masterChange() {
    var value = document.getElementById("master").value;
    document.getElementById("").innerHTML = value;
}

function topLeftChange() {
    var value = document.getElementById("top-left").value;
    var rectangle = document.getElementById("rectangle");
    changeBorderRadiusTopLeft(rectangle, value);
    document.getElementById("topLeft").innerHTML = value;
}

function topRightChange() {
    var value = document.getElementById("top-right").value;
    var rectangle = document.getElementById("rectangle");
    changeBorderRadiusTopRight(rectangle, value);
    document.getElementById("topRight").innerHTML = value;
}

function bottomLeftChange() {
    var value = document.getElementById("bottom-left").value;
    var rectangle = document.getElementById("rectangle");
    changeBorderRadiusBottomLeft(rectangle, value);
    document.getElementById("bottomLeft").innerHTML = value;
}

function bottomRightChange() {
    var value = document.getElementById("bottom-right").value;
    var rectangle = document.getElementById("rectangle");
    changeBorderRadiusBottomRight(rectangle, value);
    document.getElementById("bottomRight").innerHTML = value;
}

function changeBorderRadiusBottomLeft(rectangle, value) {
    rectangle.style.borderBottomLeftRadius = value + "px";
}

function changeBorderRadiusBottomRight(rectangle, value) {
    rectangle.style.borderBottomRightRadius = value + "px";
}

function changeBorderRadiusTopLeft(rectangle, value) {
    rectangle.style.borderTopLeftRadius = value + "px";
}

function changeBorderRadiusTopRight(rectangle, value) {
    rectangle.style.borderTopRightRadius = value + "px";
}