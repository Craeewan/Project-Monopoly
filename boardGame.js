//// Monopoly the Drinking Game
$(document).ready(function() {

    let $spacesArray = [];

    // Board game setup
    let $createBoard = () => {
        // create 32 spaces
        for (var i = 0; i < 32; i++) {
            let $space = $('<div>').addClass('space' + i, 'spaces');
            $spacesArray.push($space);
            console.log($spacesArray);
        }
        // append first 8 spaces to flexRow1
        $flexRow1 = $('.flexRow1');
        for (var i = 0; i < 8; i++) {
            $flexRow1.append($spacesArray[i]);
        }

    }

});