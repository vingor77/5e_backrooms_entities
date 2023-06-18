//TODO: Remove entities that won't be getting a stack block.

var nav = document.getElementById("nav");

//9 needs more stat blocks
//96 needs more stat blocks
//0 means keymaster
//130 needs more stat blocks
var entities = 
[   
    2, 3, 4, 5, 6, 8, 9, 10, 14, 15, 20, 24, 25, 31, 34,
    54, 64, 74, 83, 89, 94, 95, 101, 102, 105, 
    108, 110, 113, 116, 130, 170, 503, 179, 196, 11, 18, 111, 131, 135, 
    185, 197, 63, 96, 777, 69, 78, 41, 107, 66, 97, 32, 
    33, 91, 71, 61, 114, 27, 365, 136, 93, 62, 
    16, 80, 26, 44, 52, 86, 40, 232, 50, 346, 740, 75, 
    456, 231, 100, 13, 167, 67, 104, 22, 42, 45, 49, 600, 297, 0
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
    document.getElementById('showImage').innerText = ""; //Wipe previous image, then set the new one.

    //Create the img element
    if(entity == 9) {
        getImage(entity, 4);
    }
    else if(entity == 96) {
        getImage(entity, 3);
    }
    else if(entity == 130) {
        getImage(entity, 5);
    }
    else {
        getImage(entity, 1);
    }
}

function getImage(entity, count) {
    var div = document.getElementById('showImage');

    for(var i = 0; i < count; i++) {
        var stats = document.createElement("img");

        if(count > 1) {
            stats.setAttribute("src", "statBlocks/Entity_" + entity + "/" + (i + 1) + ".png");
            stats.setAttribute("class", "justify-content-center");
        }
        else {
            stats.setAttribute("src", "statBlocks/Entity_" + entity + ".png");
            stats.setAttribute("class", "justify-content-center");
        }

        div.appendChild(stats);
    }
}