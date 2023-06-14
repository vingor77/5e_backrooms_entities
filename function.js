var entityCount = 113; //Total amount of entities.
var nav = document.getElementById("nav");

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
    var img = document.createElement("img");
    img.setAttribute("src", "images/Entity_" + entity + ".png");
    img.setAttribute("class", "justify-content-center");

    div.innerText = ""; //Wipe previous image, then set the new one.

    //Append image
    div.appendChild(img);
}