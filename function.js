var entityCount = 113; //Total amount of entities.
var nav = document.getElementById("nav");

//TODO: Check if entity actually exists. Change to while loop and go through an array of numbers.
for(var i = 0; i < entityCount; i++) {
    //Create the list element
    li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    //Create the button element
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-outline-danger");
    button.setAttribute("onclick", "show(" + (i + 2) + ")");
    button.innerText = "Entity " + (i + 2);

    //append them all together
    li.appendChild(button);
    nav.appendChild(li);
}

function show(entity) {
    var div = document.getElementById('showImage');

    //Create the img element
    var stats = document.createElement("img");
    stats.setAttribute("src", "statBlocks/Entity_" + entity + ".png");
    stats.setAttribute("class", "justify-content-center");

    //Repeat steps above but for image.
    var stats = document.createElement("img");
    stats.setAttribute("src", "images/Entity_" + entity + ".png");
    stats.setAttribute("class", "justify-content-center");

    div.innerText = ""; //Wipe previous image, then set the new one.

    //Append stat block
    div.appendChild(stats);
}