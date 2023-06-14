//TODO: Remove entities that won't be getting a stack block.

var nav = document.getElementById("nav");

var entities = 
[   
    2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 15, 17, 19, 20, 24, 25, 31, 34, 36,
    48, 54, 55, 59, 64, 65, 70, 73, 74, 83, 89, 94, 95, 101, 102, 105, 
    108, 110, 113, 116, 130, 170, 503, 179, 196, 11, 18, 111, 131, 135, 
    185, 186, 197, 35, 63, 96, 126, 777, 69, 78, 41, 107, 66, 97, 32, 
    33, 91, 71, 61, 114, 27, 365, 99, 136, 93, 987, 440, 62, 140, 180, 
    16, 80, 7, 26, 76, 44, 52, 86, 40, 133, 92, 232, 50, 346, 740, 75, 
    456, 231, 100, 106, 13, 167, 67, 23, 104, 22, 42, 45, 49, 600, 220, 297
];

entities.sort(function(a, b) {return a-b});

for(var i = 0; i < entities.length; i++) {
    //Create the list element
    li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    //Create the button element
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-outline-danger");
    button.setAttribute("onclick", "show(" + entities[i] + ")");
    button.innerText = "Entity " + entities[i];

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

    div.innerText = ""; //Wipe previous image, then set the new one.

    //Append stat block
    div.appendChild(stats);
}