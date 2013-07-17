function layoutCircleV1(radius) {
    var elements = document.querySelectorAll(".step");
    var r = radius;
    for (var i = 0; i < elements.length; i++) {
        var phi = -i / (elements.length - 1) * 2 * Math.PI;
        var x = r * Math.cos(phi);
        var y = r * Math.sin(phi);
        var rotation = phi / (2 * Math.PI) * 360 - 90;
        elements[i].dataset.x = Math.round(x);
        elements[i].dataset.y = Math.round(y);
        elements[i].dataset.rotateY = Math.round(rotation);
        elements[i].dataset.rotateX = 90;
    }
}

function layoutCircleV2(radius) {
    var elements = document.querySelectorAll(".step");
    var r = radius;
    for (var i = 0; i < elements.length; i++) {
        var phi = -i / (elements.length - 1) * 2 * Math.PI;
        var x = r * Math.cos(phi);
        var y = r * Math.sin(phi);
        var rotation = phi / (2 * Math.PI) * 360 - 90;
        elements[i].dataset.x = Math.round(x);
        elements[i].dataset.y = Math.round(y);
        elements[i].dataset.rotateY = Math.round(rotation) - 180;
        elements[i].dataset.rotateX = 90;
    }
}

function layoutCircleV3(radius) {
    var elements = document.querySelectorAll(".step");
    var r = radius;
    for (var i = 0; i < elements.length; i++) {
        var phi = -i / (elements.length - 1) * 2 * Math.PI;
        var x = r * Math.cos(phi);
        var y = r * Math.sin(phi);
        var rotation = phi / (2 * Math.PI) * 360 - 90;
        elements[i].dataset.x = Math.round(x);
        elements[i].dataset.y = Math.round(y);
        elements[i].dataset.rotate = Math.round(rotation);
    }
}

function layoutCircleV4(radius) {
    var elements = document.querySelectorAll(".step");
    var r = radius;
    for (var i = 0; i < elements.length; i++) {
        var phi = -i / (elements.length - 1) * 2 * Math.PI;
        var x = r * Math.cos(phi);
        var y = r * Math.sin(phi);
        var rotation = phi / (2 * Math.PI) * 360 - 90;
        elements[i].dataset.x = Math.round(x);
        elements[i].dataset.y = Math.round(y);
        elements[i].dataset.rotateY = Math.round(rotation) - 90;
        elements[i].dataset.rotateX = 90;
    }
}

function layoutDeep(distance) {
    var elements = document.querySelectorAll(".step");
    var positionZ = distance;
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.z = positionZ;
        positionZ = positionZ + 1200;
    }
}


function layoutLinearGrid(distanceX, distanceY) {
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = positionX;
        elements[index].dataset.y = positionY;
        if ((index + 1) % 4 === 0) {
            positionY = positionY + distanceY;
            positionX = 100;
        } else {
            positionX = positionX + distanceX;
        }
    }
}

function layoutLinear(distance) {
    var elements = document.querySelectorAll(".step");
    var position = 100;
    var scale = 1;
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = position;
        position = position + distance;
        elements[index].dataset.scale = scale;
        if (index % 2 === 0) {
            scale = 2;
        } else {
            scale = 1;
        }
    }
}


function layoutSnakeGrid(numberOfColumns) {
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    var rowType = "even";
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = positionX;
        elements[index].dataset.y = positionY;
        if ((index + 1) % numberOfColumns === 0) {
            positionY = positionY + 1000;
            if (rowType === "even") {
                rowType = "odd";
                positionX = (1000 * (numberOfColumns - 1)) + 100;
            } else {
                rowType = "even";
                positionX = 100;
            }
        } else {
            if (rowType === "even") {
                positionX = positionX + 1000;
            } else {
                positionX = positionX - 1000;
            }
        }
    }
}


function layoutVerticalGrid(distanceX, distanceY) {
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    var numberOfColumns = 4;
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = positionX;
        elements[index].dataset.y = positionY;
        if ((index + 1) % numberOfColumns === 0) {
            positionX = positionX + distanceX;
            positionY = 100;
        } else {
            positionY = positionY + distanceY;
        }
    }
}


function layoutVertical(distance) {
    var elements = document.querySelectorAll(".step");
    var position = 100;
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.y = position;
        position = position + distance;
    }
}