$(function() {
    $('#entities').hide();
    $('#items').hide();
    $('#levels').hide();
    $('#groups').hide();

    $('#entityBtn').on("click", () => {
        showEntityPage();
        $('#items').hide();
        $('#entities').show();
        $('#levels').hide();
        $('#groups').hide();
    });

    $('#itemBtn').on("click", () => {
        showItemPage();
        $('#items').show();
        $('#entities').hide();
        $('#levels').hide();
        $('#groups').hide();
    });

    $('#levelBtn').on("click", () => {
        showLevelPage();
        $('#items').hide();
        $('#entities').hide();
        $('#levels').show();
        $('#groups').hide();
    });

    $('#groupBtn').on("click", () => {
        showGroupPage();
        $('#items').hide();
        $('#entities').hide();
        $('#levels').hide();
        $('#groups').show();
    });

    //ENTITY START 
    function showEntityPage() {
        var entities = 
        [
            2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15,
            16, 18, 20, 22, 24, 25, 26, 27, 31, 32,
            33, 34, 40, 41, 42, 44, 45, 49, 50, 52,
            54, 61, 62, 63, 64, 66, 67, 69, 71, 74,
            75, 78, 80, 83, 86, 89, 91, 93, 94, 95,
            96, 97, 100, 101, 102, 104, 105, 107, 108,
            110, 111, 113, 114, 116, 130, 131, 135, 136,
            167, 170, 179, 185, 196, 197, 231, 232, 297,
            346, 365, 456, 503, 600, 740, 777
        ];

        $('#entityTabs').tabs();
        displayStatBlock(entities);
    }

    function displayStatBlock(entities) {
        for(var i = 0; i < entities.length; i++) {
            $('#entityTab' + entities[i]).remove(); //Remove the tab
            $('#entity' + entities[i]).remove(); //Remove the div
        }

        for(var i = 0; i < entities.length; i++) {
            li = document.createElement("li");
            li.setAttribute("id", "entityTab" + entities[i]);

            a = document.createElement("a");
            a.setAttribute("href", ("#entity" + entities[i]));
            a.appendChild(document.createTextNode("Entity " + entities[i]));

            li.appendChild(a);
            document.getElementById('entityTabList').appendChild(li);
            
            div = document.createElement("div");
            div.setAttribute("id", ("entity" + entities[i]));
            div.setAttribute("class", "tab");

            checkSpecials(entities[i], div);
            document.getElementById('entityTabs').appendChild(div);

            $('#entityTabs').tabs("refresh");
        }
    }

    function checkSpecials(entity, div) {
        if(entity == 9) {
            createContent(entity, 4, div);
        }
        else if(entity == 96) {
            createContent(entity, 3, div);
        }
        else if(entity == 130) {
            createContent(entity, 5, div);
        }
        else {
            createContent(entity, 1, div);
        }
    }

    function createContent(entity, count, div) {
        a = document.createElement("a");
        a.setAttribute("href", "http://backrooms-wiki.wikidot.com/entity-" + entity);
        a.setAttribute("target", "_blank");
        a.setAttribute("id", "entityWikiLink");
        a.appendChild(document.createTextNode("Entity " + entity + " wiki link"));

        div.appendChild(a);

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
    //ENTITY END. KEEP ENTITY RELATED ABOVE.

    //ITEM START
    function showItemPage() {
        $('#itemTabs').tabs();
        displayItems();
        //Do setup here.
    }

    function displayItems() {
        var count = 1;
        for(var i = 0; i < items.length; i++) {
            if(items[i][2] == 1) {
                $('#itemTab' + items[i][2] + "-" + count).remove();
                $('#item' + items[i][2] + "-" + count).remove();
                count++;
            }
            else if(items[i][2] == 42) {
                $('#itemTab' + items[i][2] + "-" + count).remove();
                $('#item' + items[i][2] + "-" + count).remove();
                count++;
            }
            else {
                $('#itemTab' + items[i][2]).remove();
                $('#item' + items[i][2]).remove();
            }

            if(count == 5) {
                count = 1;
            }
        }

        count = 1;
        for(var i = 0; i < items.length; i++) {
            if(count == 5) {
                count = 1;
            }
            li = document.createElement("li");

            a = document.createElement("a");
            if(items[i][2] == 1) {
                li.setAttribute("id", "itemTab" + items[i][2] + "-" + count);
                a.setAttribute("href", "#item" + (items[i][2]) + "-" + count);
            }
            else if(items[i][2] == 42) {
                li.setAttribute("id", "itemTab" + items[i][2] + "-" + count);
                a.setAttribute("href", "#item" + items[i][2] + "-" + count);
            }
            else {
                li.setAttribute("id", "itemTab" + items[i][2]);
                a.setAttribute("href", "#item" + (items[i][2]));
            }
            a.appendChild(document.createTextNode(items[i][0]));

            li.appendChild(a);
            document.getElementById('itemTabList').appendChild(li);
            
            div = document.createElement("div");
            if(items[i][2] == 1) {
                div.setAttribute("id", "item" + items[i][2] + "-" + count);
                count++;
            }
            else if(items[i][2] == 42) {
                div.setAttribute("id", "item" + items[i][2] + "-" + count);
                count++;
            }
            else {
                div.setAttribute("id", "item" + items[i][2]);
            }
            div.setAttribute("class", "tab");

            createItems(items[i], div);
            document.getElementById('itemTabs').appendChild(div);

            $('#itemTabs').tabs("refresh");
        }
    }

    function createItems(item, div) {
        a = document.createElement("a");
        a.setAttribute("href", "http://backrooms-wiki.wikidot.com/object-" + item[2]);
        a.setAttribute("target", "_blank");
        a.setAttribute("id", "itemWikiLink");
        a.appendChild(document.createTextNode("Item " + item[2] + " wiki link"));

        div.appendChild(a);

        //Create content
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        var rarity = document.createElement("div");
        rarity.setAttribute("class", "col-sm-12 col-md-2");
        rarity.innerText = "Rarity: " + item[1];

        var number = document.createElement("div");
        number.setAttribute("class", "col-sm-12 col-md-2");
        number.innerText = "Item number: " + item[2];

        var levels = document.createElement("div");
        levels.setAttribute("class", "col-sm-12 col-md-2");
        levels.innerText = "Level spawns: " + item[3];

        var desc = document.createElement("div");
        desc.setAttribute("class", "col-sm-12 col-md-6");
        desc.innerText = "Description: " + item[4];

        row.appendChild(rarity);
        row.appendChild(number);
        row.appendChild(levels);
        row.appendChild(desc);

        div.appendChild(row);
    }

    //ITEM END. KEEP ITEM RELATED ABOVE.

    //LEVEL START
    function showLevelPage() {
        //Do setup here.
    }
    //LEVEL END. KEEP LEVEL RELATED ABOVE.

    //GROUP START
    function showGroupPage() {
        //Do setup here.
    }
    //GROUP END. KEEP GROUP RELATED ABOVE.
})