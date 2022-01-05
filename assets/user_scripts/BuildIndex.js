var columns = 6;

$.get("/assets/user_data/GamesList.json", function (gamesList) {
    // Build the first cell
    var container = $("#games-container")[0];
    var tableBody = $("#games-body")[0];
    
    // Add data
    tableBody.innerHTML += "<tr class=\"games-container-row\"></tr>"
    for (var i = 0; i < columns; i++) {
        $(".games-container-row")[0].innerHTML += `
        <td><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></td>
        `;
    }

    // Clone rows
    var gamesCount = Object.keys(gamesList).length;
    var rowCount = Math.ceil(gamesCount / columns);

    for (var i = 0; i < rowCount; i++) {
        var tr = $(".games-container-row")[0];
        var cloned = tr.cloneNode(true);
        $("#games-body")[0].appendChild(cloned);
    };


    // Set image data
    for (const [gameId, gameName] of Object.entries(gamesList)) {
        
    };
});