function masterChange() {
    var NumberMaster = document.getElementById("number-master");
    var value = document.getElementById("master").value;
    var TopLeft = document.getElementById("top-left");
    var TopRight = document.getElementById("top-right");
    var BottomLeft = document.getElementById("bottom-left");
    var BottomRight = document.getElementById("bottom-right");
    NumberMaster.value = value;
    TopLeft.value = value;
    TopRight.value = value;
    BottomLeft.value = value;
    BottomRight.value = value;
    topLeftChange();
    topRightChange();
    bottomLeftChange();
    bottomRightChange();
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
    var NumberBottomLeft = document.getElementById("number-bottom-left");
    NumberBottomLeft.value = value;
}

function changeBorderRadiusBottomRight(rectangle, value) {
    rectangle.style.borderBottomRightRadius = value + "px";
    var NumberBottomRight = document.getElementById("number-bottom-right");
    NumberBottomRight.value = value;
}

function changeBorderRadiusTopLeft(rectangle, value) {
    rectangle.style.borderTopLeftRadius = value + "px";
    var NumberTopLeft = document.getElementById("number-top-left");
    NumberTopLeft.value = value;
}

function changeBorderRadiusTopRight(rectangle, value) {
    rectangle.style.borderTopRightRadius = value + "px";
    var NumberTopRight = document.getElementById("number-top-right");
    NumberTopRight.value = value;
}