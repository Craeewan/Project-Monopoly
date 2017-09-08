//// Monopoly the Drinking Game
$(document).ready(function() {
    // Board game setup
    // Board should be built with flexboxes consiting of: 
    // One main box. 
    // Three flex rows. THe second row should have Three flex columns. One column will be reversed.
    // The Second flex row will be reversed
    let $spacesArray = [];

    let $createBoard = () => {
        // create flexCol1, flexCol2, and innerContainer
        $flexCol1 = $('<div>').addClass('flexCol1');
        $innerContainer = $('<div>').addClass('innerContainer');
        $flexCol2 = $('<div>').addClass('flexCol2');

        // append flexCol1&2 to flexRow2
        $flexRow2 = $('.flexRow2');
        $flexRow2.append($flexCol1);
        $flexRow2.append($innerContainer)
        $flexRow2.append($flexCol2);

        // create 32 spaces
        for (var i = 0; i < 32; i++) {
            let $space = $('<div>').addClass('space' + i).addClass('spaces');
            $spacesArray.push($space);
            console.log($spacesArray);
        }
        // append first 9 spaces to flexRow1
        $flexRow1 = $('.flexRow1');
        for (var i = 0; i < 9; i++) {
            $flexRow1.append($spacesArray[i]);
        }
        // append spaces 9 through 15 to flexCol1
        for (var i = 9; i < 16; i++) {
            $flexCol1.append($spacesArray[i]);
        }
        // append spaces 16 through 25 to flexRow3
        $flexRow3 = $('.flexRow3');
        for (var i = 16; i < 25; i++) {
            $flexRow3.append($spacesArray[i]);
        }
        // append spaces 25 through 31 to flexCol2
        for (var i = 25; i < 32; i++) {
            $flexCol2.append($spacesArray[i]);
        }
        // add "corner" class
        $spacesArray[0].addClass('corner');
        $spacesArray[8].addClass('corner');
        $spacesArray[16].addClass('corner');
        $spacesArray[24].addClass('corner');
    }

    $createBoard();
});