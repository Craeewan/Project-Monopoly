//// Monopoly the Drinking Game

// Rules
// In order to begin the game players need to click on their piece.
// The order of the peices clicked determine the order of players.
// Players will then "Roll the dice to determine where they land"

$(document).ready(function() {
    // Board game setup
    // Board should be built with flexboxes consiting of: 
    // One main box. 
    // Three flex rows. THe second row should have Three flex columns. One column will be reversed.
    // The Second flex row will be reversed
    let player = {
        playerNumber : '1',
        
    }

    // let $spacesArray = [];

    // // max players
    // $player1 = $('<div>').addClass('player1');
    // $player2 = $('<div>').addClass('player2');
    // $player3 = $('<div>').addClass('player3');
    // $player4 = $('<div>').addClass('player4');

    // $fourPlayerArray = [$player1, $player2, $player3, $player4];;

    let $createBoard = () => {
    //         // create flexCol1, flexCol2, and innerContainer
    //         $flexCol1 = $('<div>').addClass('flexCol1');
    //         $innerContainer = $('<div>').addClass('innerContainer');
    //         $flexCol2 = $('<div>').addClass('flexCol2');

    //         // append flexCol1&2 to flexRow2
    //         $flexRow2 = $('.flexRow2');
    //         $flexRow2.append($flexCol1);
    //         $flexRow2.append($innerContainer)
    //         $flexRow2.append($flexCol2);

    //         // create 32 spaces
    //         for (var i = 0; i < 32; i++) {
    //             let $space = $('<div>').addClass('space' + i).addClass('spaces');
    //             $spacesArray.push($space);
    //             console.log($spacesArray);
    //         }
    //         // append first 9 spaces to flexRow1
    //         $flexRow1 = $('.flexRow1');
    //         for (var i = 0; i < 9; i++) {
    //             $flexRow1.append($spacesArray[i]);
    //         }
    //         // append spaces 9 through 15 to flexCol1
    //         for (var i = 9; i < 16; i++) {
    //             $flexCol1.append($spacesArray[i]);
    //         }
    //         // append spaces 16 through 25 to flexRow3
    //         $flexRow3 = $('.flexRow3');
    //         for (var i = 16; i < 25; i++) {
    //             $flexRow3.append($spacesArray[i]);
    //         }
    //         // append spaces 25 through 31 to flexCol2
    //         for (var i = 25; i < 32; i++) {
    //             $flexCol2.append($spacesArray[i]);
    //         }
    //         // add "corner" class
    //         $spacesArray[0].addClass('corner');
    //         $spacesArray[8].addClass('corner');
    //         $spacesArray[16].addClass('corner');
    //         $spacesArray[24].addClass('corner');

    //         // Players Box
    //         $playerBox = $('<div>').addClass('playerBox');
    //         $innerContainer.append($playerBox);


    //         for (var i = 0; i < $playerArray.length; i++) {
    //             $playerBox.append($playerArray[i]);
    //         }
    //         // Dice Box
    //         $diceBox = $('<div>').addClass('diceBox');
    //         $innerContainer.append($diceBox);

    //         $displayDice = $('<div>').addClass('displayDice');
    //         $diceButton = $('<div>').addClass('diceButton');

    //         $diceBox.append($displayDice);
    //         $diceBox.append($diceButton);

    //         // Shot Counter
    //         $shotBox = $('<div>').addClass('shotBox');
    //         $innerContainer.append($shotBox);

    //         // Money Counter
    //         $moneyBox = $('<div>').addClass('moneyBox');
    //         $innerContainer.append($moneyBox);

    //         // Card Box
    //         $cardBox = $('<div>').addClass('cardBox');
    //         $innerContainer.append($cardBox);

    //         $cards
    //     }
    //     // $createBoard();

    // // Start Game
    // let $startGame = () => {
    //     $createBoard();
    // }

    // // Function to "roll" a number between 1 and 6
    // let rollRandomNumber = () => {
    //     var displayRoll = function() {
    //         var $dicebox = $('.dicebox');
    //         $counter = Math.floor((Math.random() * 10) + 1);
    //         $dicebox.text($counter);
    //         return $counter;
    //     };
    // }
});