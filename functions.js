$(document).ready(function() {
  // player(i) clicks his piece. Piece appends to space(0). Roll Dice becomes available. Player rolls dice. player lands o space(whatever).
  // Player is prompted to either buy property or pay tax. Player(i+) goes next.

  var $horse = $('.horse');
  var $bird = $('.bird');
  var $person = $('.person');
  var $coin = $('.coin');

  var $players = [];
  var $spaces = $('.pieces');
  var $spacesArray = []; //call each space by array number
  // var $corner = $('.cornerpiece');
  // var $cornerArray = []; //call each corner by array number

  for (var i = 0; i < $spaces.length; i++) {
    $spacesArray.push($spaces[i]);
  };


  var $playas = [];
  var $currentpl = 0;
  var round = 0;

  var $playercolor = ["red", "blue", "green", "yellow"]

  // TURN
  var turn = function() {
    $currentpl++
    if ($currentpl > 3) {
      $currentpl = 0
    }
  }
  // LANDING
  $('.landing').click(function() {
    window.location.href = 'gamepage.html';
  });

  // START
  //ONclick to connect the player to the item clicked first.

  $('.coin').click(function(event) {
    $playas.push(event.target);
    $spacesArray[0].append(event.target);

    console.log($playas);
    $(this).off(event);
  });

  $('.bird').click(function(event) {
    $playas.push(event.target);

    $spacesArray[0].append(event.target);
    console.log($playas);
    $(this).off(event);
  });

  $('.person').click(function(event) {
    $playas.push(event.target);

    $spacesArray[0].append(event.target);
    console.log($playas);
    $(this).off(event);
  });

  $('.horse').click(function(event) {
    $playas.push(event.target);

    $spacesArray[0].append(event.target);
    console.log($playas);
    $(this).off(event);

  });
  var $counter;
  var displayRoll = function() {
    var $dicebox = $('.dicebox');
    $counter = Math.floor((Math.random() * 10) + 1);
    $dicebox.text($counter);
    return $counter;
  };
  // Money Box
  var $moneyul = $('<ul class="moneyul">');
  $('.moneybox').append($moneyul);




  // Cards

  var $cardsArray = [];
  var $cards = $('.cards');

  // card array

  for (var i = 0; i < $cards.length; i++) {
    $cardsArray.push($cards[i]);
  };
  // hide cards
  for (var i = 0; i < $cardsArray.length; i++) {
    $($cardsArray[i]).hide();
  };

  // function landOnIt(){
  // if (currentpl == ) {}
  //
  // }
  // PLAYER OBJECTS

  var $player1 = {
    Player: [],
    Num: 0,

    Who: "Player 1",

    moneyCounter: 2000,

    shotCounter: 10,

    positionCounter: 0,

    nextPosition: function() {

      var next = (this.positionCounter + $counter) % 23;
      return next;
    },

    move: function() {

      this.positionCounter = this.nextPosition();
      console.log(this.positionCounter);

      $spacesArray[this.positionCounter].append($playas[$currentpl]);
    }
    // push($($(this))) into that array checker ie. property, corner
    // clear checker array every round
  };

  var $player2 = {

    Num: 1,

    Who: "Player 2",

    moneyCounter: 2000,

    shotCounter: 10,

    displayShot: function() {
      $shotli2.text(shotCounter);
    },

    positionCounter: 0,

    nextPosition: function() {

      var nextPosition = ($(this).positionCounter + $counter) % 23;
      return nextPosition;
    },

    move: function() {

      $(this).positionCounter = $(this).nextPosition();
      console.log($player2.positionCounter)

      $spacesArray[$(this).positionCounter].append($playas[$currentpl]);
    },
  };

  var $player3 = {

    Num: 2,

    Who: "Player 3",

    moneyCounter: 2000,

    shotCounter: 10,

    positionCounter: 0,

    nextPosition: function() {
      var nextPosition = ($(this).positionCounter + $counter) % 23;
      return nextPosition;
    },

    move: function() {
      $(this).positionCounter = $(this).nextPosition();
      console.log($player3.positionCounter)
      $spacesArray[$player3.positionCounter].append($playas[$currentpl]);
    },
  };

  var $player4 = {

    Num: "4",

    Who: "Player 4",

    moneyCounter: 2000,

    shotCounter: 10,


    positionCounter: 0,

    nextPosition: function() {

      var nextPosition = ($(this).positionCounter + $counter) % 23;
      return nextPosition;
    },

    move: function() {
      $(this).positionCounter = $(this).nextPosition();
      console.log(this.positionCounter)
      $spacesArray[$(this).positionCounter].append($playas[$currentpl]);
    },
  };

  $players.push($player1);
  $players.push($player2);
  $players.push($player3);
  $players.push($player4);

  // DICE BOX
  var $diceButton = $('<button class="rollit">');
  var $moveButton = $('<button class="moveit">');
  $('.diceflex').append($diceButton);
  $('.diceflex').append($moveButton);

  $('.rollit').click(function() {
    displayRoll();
  });
  $($moveButton).click(function() {

    $players[$currentpl].move();

    console.log($cardsArray);
    checkMe();
  });


  // Money Box

  var moneyLister = () => {
    var $moneyli1 = $('<li class="moneyli">');
    $moneyli1.text($player1.moneyCounter);
    var $moneyli2 = $('<li class="moneyli">');
    $moneyli2.text($player2.moneyCounter);
    var $moneyli3 = $('<li class="moneyli">');
    $moneyli3.text($player3.moneyCounter);
    var $moneyli4 = $('<li class="moneyli">');
    $moneyli4.text($player4.moneyCounter);

    $moneylis = [$moneyli1, $moneyli2, $moneyli3, $moneyli4]

    for (var i = 0; i < $moneylis.length; i++) {

      $('.moneyul').append($moneylis[i]);
    }
  };
  moneyLister();
  // Shot Box

  var $shotul = $('<ul class="shotul">');
  $('.shotbox').append($shotul);

  var shotLister = () => {
    var $shotli1 = $('<li class="shotli">');
    $shotli1.text($player1.shotCounter);
    var $shotli2 = $('<li class="shotli">');
    $shotli2.text($player2.shotCounter);
    var $shotli3 = $('<li class="shotli">');
    $shotli3.text($player3.shotCounter);
    var $shotli4 = $('<li class="shotli">');
    $shotli4.text($player4.shotCounter);

    $shotlis = [$shotli1, $shotli2, $shotli3, $shotli4]

    for (var i = 0; i < $shotlis.length; i++) {
      $('.shotul').append($shotlis[i]);
    }
  };
  shotLister();


  // function shotLister() {
  //   var $shotli1 = $('<li class="moneyli">');
  //   $player1.displayShot();
  //   var $shotli2 = $('<li class="moneyli">');
  //   $player1.displayShot();
  //   var $shotli3 = $('<li class="moneyli">');
  //   $player1.displayShot();
  //   var $shotli4 = $('<li class="moneyli">');
  //   $player1.displayShot();
  //   $('.moneyul').append('.moneyli');
  // };

  var checkMe = function() {
    var thisPlayer = $players[$currentpl].positionCounter
    console.log(thisPlayer);
    if ($players[$currentpl].positionCounter === 0) {

      $PassGo.display();
    } else if ($players[$currentpl].positionCounter === 1 || 2) {
      $jacksonHeights.display();
    } else if ($players[$currentpl].positionCounter === 3 || 9 || 15 || 21) {
      $Railroad.display();
    } else if ($players[$currentpl].positionCounter === 4 || 5) {
      $Harlem.display();
    } else if ($players[$currentpl].positionCounter === 10 || 11) {
      $upWestSide.display();
    } else if ($players[$currentpl].positionCounter === 12 || 18) {
      $waterCard.display();
    } else if ($players[$currentpl].positionCounter === 13 || 14) {
      $upEastSide.display();
    } else if ($players[$currentpl].positionCounter === 16 || 17) {
      $parkAve.display();
    } else if ($players[$currentpl].positionCounter === 22 || 23) {
      $chelsea.display();
    }
  }

  // EVENT LISTENERS
  $('#buyMoney1').click(function() {
    $jacksonHeights.buyMoney();
    debugger
    turn();
  });
  $('#buyShot1').click(function() {
    $jacksonHeights.buyShot();
    debugger
    turn();
  });
  $('#shotTax1').click(function() {
    $jacksonHeights.shotTax();
    debugger
    turn();
  });

  $('#buyMoney2').click(function() {
    $Harlem.buyMoney();
    debugger
    turn();
  });
  $('#buyShot2').click(function() {
    $Harlem.buyShot();
    turn();
  });
  $('#shotTax2').click(function() {
    $Harlem.shotTax();
    turn();
  });

  $('#buyMoney3').click(function() {
    $upWestSide.buyMoney();
    turn();
  })
  $('#buyShot3').click(function() {
    $upWestSide.buyShot();
    turn();
  })
  $('#shotTax3').click(function() {
    $upWestSide.shotTax();
    turn();
  })

  $('#buyMoney4').click(function() {
    $upEastSide.buyMoney();
    turn();
  });
  $('#buyShot4').click(function() {
    $upEastSide.buyShot();
    turn();
  });
  $('#shotTax4').click(function() {
    $jacksonHeights.shotTax();
    turn();
  });

  $('#buyMoney5').click(function() {
    $parkAve.buyMoney();
    turn();
  });
  $('#buyShot5').click(function() {
    $parkAve.buyShot();
    turn();
  });
  $('#shotTax5').click(function() {
    $parkAve.shotTax();
    turn();
  });

  $('#buyMoney6').click(function() {
    $chelsea.buyMoney();
    turn();
  });
  $('#buyShot6').click(function() {
    $chelsea.buyShot();
    turn();
  });
  $('#shotTax6').click(function() {
    $chelsea.shotTax();
    turn();
  });
  // Properties

  var $jacksonHeights = {
    checker: [],

    where: [$spacesArray[1], $spacesArray[2]],

    name: "Jackson Heights",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 200;
      debugger
      $($jacksonHeights.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($jacksonHeights.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      debugger
      $($jacksonHeights.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($jacksonHeights.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 1;
    },
    display: function() {
      $($cardsArray[0]).toggleClass('dpcards');
    },

  };

  var $Harlem = {
    checker: [],

    where: [$spacesArray[4], $spacesArray[5]],

    name: "125th",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 300;
      $($Harlem.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($Harlem.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      $($Harlem.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($Harlem.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 1;
    },
    display: function() {
      debugger
      $($cardsArray[1]).toggleClass('dpcards');
    },
  };

  var $upWestSide = {
    checker: [],

    where: [$spacesArray[10], $spacesArray[11]],

    name: "Upper West Side",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 400;
      $($upWestSide.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($upWestSide.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      $($upWestSide.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($upWestSide.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 1;
    },
    display: function() {
      debugger
      $($cardsArray[2]).toggleClass('dpcards');
    },
  };

  var $upEastSide = {
    checker: [],

    where: [$spacesArray[13], $spacesArray[14]],

    name: "Upper East Side",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 500;
      $($upEastSide.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($upEastSide.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      $($upEastSide.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($upEastSide.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 1;
    },
    display: function() {

      $($cardsArray[3]).toggleClass('dpcards');
    },

  };

  var $parkAve = {
    checker: [],

    where: [$spacesArray[16], $spacesArray[17]],

    name: "Park Ave",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 600;
      $($parkAve.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($parkAve.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      $($parkAve.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($parkAve.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 1;
    },
    display: function() {

      $($cardsArray[4]).toggleClass('dpcards');
    },

    clear: function() {
      $(this).checker = [];
    },
  };

  var $chelsea = {
    checker: [],

    where: [$spacesArray[22], $spacesArray[23]],

    name: "Chelsea",

    buyMoney: function() {
      $players[$currentpl].moneyCounter - 700;
      $($chelsea.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($chelsea.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    buyShot: function() {
      $players[$currentpl].shotCounter - 1;
      $($chelsea.where[0]).children().css("background-color", $playercolor[$currentpl]);
      $($chelsea.where[1]).children().css("background-color", $playercolor[$currentpl]);
    },
    shotTax: function() {
      $players[$currentpl].shotCounter - 2;
    },
    display: function() {
      debugger
      $($cardsArray[5]).toggleClass('dpcards');
    },

  };

  // special spaces

  var $Railroad = {
    checker: [],

    where: $spacesArray[3],

    name: "Railroad",

    Does: "Ride to the next railroad",

    display: function() {
      debugger
      $($cardsArray[6]).toggleClass('dpcards');
    },

    random: function() {
      var $where = [3, 9, 15, 21]
      var random = $where[Math.floor(Math.random() * $where.length)];
      $players[$currentpl].append($spacesArray[random])
    },

  };

  // // // Special spaces

  // // // if(player[i] === spaces[i]){
  // // //   display property option: buy or pay tax.


  // // CARD OBJECTS
  var $waterCard = {
    checker: [],

    Name: "Water Card",

    // Tells player to drink a shot of water
    // times out after 5 seconds

    Says: "Drink Two shots of water",


    display: function() {
      debugger
      $($cardsArray[7]).toggleClass('.dpcards');

    },
    Where: $("#title9")
  };



  var $GoToJail = {
    checker: [],

    Name: "Got To Jail",

    Says: "Go directly to Jail. Do not touch go. Do take a shot",

    display: function() {
      debugger
      $($cardsArray[8]).toggleClass('.dpcards');
    },
  };

  var $PassGo = {
    checker: [],

    Name: "GO!",

    display: function() {
      $($cardsArray[9]).toggleClass('.dpcards');
      debugger
    },
    collect: function() {
      $player[$currentpl].moneyCounter + 100;
    }
  }
});
