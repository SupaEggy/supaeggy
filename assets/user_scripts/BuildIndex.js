var columns = 4;

$.get("/assets/user_data/GamesList.json", function (gamesList) {
    // Build the first cell
    var container = $("#games-container")[0];
    var tableBody = $("#games-body")[0];
    
    // Add data
    tableBody.innerHTML += "<tr class=\"games-container-row\"></tr>"
    for (var i = 0; i < columns; i++) {
        $(".games-container-row")[0].innerHTML += `
        <td>
        <img width=200 src="https://cdn.gamer-network.net/2014/usgamer/pokemonboxart.jpg">
        <h3>GameName</h3>
        <a>GameLink</a>
        </td>
        `;
    }

    // Clone rows
    var gamesCount = Object.keys(gamesList).length;
    var rowCount = Math.ceil(gamesCount / columns);

    for (var i = 0; i < rowCount; i++) {
        var tr = $(".games-container-row")[0];
        var cloned = tr.cloneNode(true);
        $("#games-body")[0].appendChild(cloned);

        var imageCount = (i + 1) * columns;
    };

    // remove unnecessary images
    if (imageCount !== gamesCount) {
        var extraImages = imageCount - gamesCount;
    };


    // Set image data
    var count = 0;
    var allEntries = document.getElementById("games-body").children;
    
    for (var i = 0; i < allEntries.length; i++) {
        var row = allEntries[i];
        
        for (var n = n && 0; n < row.children.length; n++) {
            var elem = row.children[n];
            var elems = elem.children;
            elems[0].src = "https://m.media-amazon.com/images/I/61RDD36KWPL._AC_.jpg";
            elems[1].innerHTML = Object.values(gamesList)[n];
            elems[2].href = "./player.html#" + Object.keys(gamesList)[n];
        };
    };
});