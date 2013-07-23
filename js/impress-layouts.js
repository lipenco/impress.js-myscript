function layoutCircleV1(options) {
    var radius = options.radius;
    var elements = document.querySelectorAll(".step");
    if (!radius || radius < 900) {
        radius = 1024 / (2 * Math.tan(Math.PI / elements.length));
    }
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

function layoutCircleV2(options) {
    var radius = options.radius;
    var elements = document.querySelectorAll(".step");
    if (!radius || radius < 900) {
        radius = 1024 / (2 * Math.tan(Math.PI / elements.length));
    }
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

function layoutCircleV3(options) {
    var radius = options.radius;
    var elements = document.querySelectorAll(".step");
    if (!radius || radius < 900) {
        radius = 1024 / (2 * Math.tan(Math.PI / elements.length));
    }
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

function layoutCircleV4(options) {
    var radius = options.radius;
    var elements = document.querySelectorAll(".step");
    if (!radius || radius < 900) {
        radius = 1024 / (2 * Math.tan(Math.PI / elements.length));
    }
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

function layoutChain(options) {
    var distance = options.distance;
    var elements = document.querySelectorAll(".step");
    var r = 1024 / (2 * Math.tan(Math.PI / elements.length));
    var positionX = 0;
    if (!distance || distance < 700) {
        distance = 700;
    }
    for (var i = 0; i < elements.length; i++) {
        var phi = -i / (elements.length - 1) * 2 * Math.PI;
        var rotation = phi / (2 * Math.PI) * 360;
        elements[i].dataset.rotateX = Math.round(rotation);
        elements[i].dataset.rotateZ = Math.round(rotation);
        elements[i].dataset.x = positionX;
        positionX = positionX + distance;   
    }
}

function layoutDeep(options) {
    var distance = options.distance;
    var elements = document.querySelectorAll(".step");
    var positionZ = 1000;
    if (!distance || distance < 900) {
        distance = 1000;
    }
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.z = positionZ;
        positionZ = positionZ + distance;
    }
}


function layoutLinearGrid(options) {
    var numberOfColumns = options.numberOfColumns;
    var distanceX = options.distanceX;
    var distanceY = options.distanceY;
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    if (!distanceX || distanceX < 900) {
        options.distanceX = 1500;
    }
    if (!distanceY || distanceY < 700) {
        options.distanceY = 1000;
    }
    if (!numberOfColumns || numberOfColumns < 1) {
        options.numberOfColumns = 5;
    }
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = positionX;
        elements[index].dataset.y = positionY;
        if ((index + 1) % numberOfColumns === 0) {
            positionY = positionY + distanceY;
            positionX = 100;
        } else {
            positionX = positionX + distanceX;
        }
    }
}

function layoutLinear(options) {
    var distance = options.distance;
    var elements = document.querySelectorAll(".step");
    var position = 100;
    var scale = 1;
    if (!distance || distance < 900) {
        distance = 1500;
    }
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


function layoutSnakeGrid(options) {
    var numberOfColumns = options.numberOfColumns;
    var distanceX = options.distanceX;
    var distanceY = options.distanceY;
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    var rowType = "even";
    if (!distanceX || distanceX < 900) {
        distanceX = 1500;
    }
    if (!distanceY || distanceY < 700) {
        distanceY = 1000;
    }
    if (!numberOfColumns || numberOfColumns < 1) {
        numberOfColumns = 5;
    }
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = positionX;
        elements[index].dataset.y = positionY;
        if ((index + 1) % numberOfColumns === 0) {
            positionY = positionY + distanceY;
            if (rowType === "even") {
                rowType = "odd";
                positionX = (distanceX * (numberOfColumns - 1)) + 100;
            } else {
                rowType = "even";
                positionX = 100;
            }
        } else {
            if (rowType === "even") {
                positionX = positionX + distanceX;
            } else {
                positionX = positionX - distanceX;
            }
        }
    }
}


function layoutVerticalGrid(options) {
    var numberOfColumns = options.numberOfColumns;
    var distanceX = options.distanceX;
    var distanceY = options.distanceY;
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    if (!distanceX || distanceX < 900) {
        distanceX = 1500;
    }
    if (!distanceY || distanceY < 700) {
        distanceY = 1000;
    }
    if (!numberOfColumns || numberOfColumns < 1) {
        numberOfColumns = 5;
    }
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


function layoutVertical(options) {
    var distance = options.distance;
    var elements = document.querySelectorAll(".step");
    var position = 100;
    if (!distance || distance < 700) {
        distance = 1000;
    }
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.y = position;
        position = position + distance;
    }
}