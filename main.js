// We create our only state
var mainState = {
  preload: function() {
    this.game.load.spritesheet('cards', 'assets/cards.png', 334, 440);
    this.game.load.image('background', 'assets/background.png');
    this.load.image('cardBack', 'assets/Card-Back-01.png');
    this.load.image('button', 'assets/button.png');
  },
  
  create: function() {
    // Create auto scaling and align page horizontally and vertically
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    // Add the background image
    this.background = this.game.add.sprite(0, 0, 'background');
    
    // Create the sprites for the game board
    this.createGameBoard();
    
    // Start the first round
    this.playRound();
    
  },
  
  update: function() {
    
  },
  
  
  // ****** FUNCTIONS ******
  createGameBoard: function () {
    // Game world x: 640 y: 360
    // Card Sprite x: 43 y: 60
    
    // Create battle area mat sprites
    this.playerBattleMatOne = this.game.add.sprite(55, 200, 'cardBack');
    this.playerBattleMatOne.scale.setTo(3.1, 1);
    this.playerBattleMatOne.alpha = (0.5);
    this.playerBattleMatOne.inputEnabled = true;
    
    this.computerBattleMatOne = this.game.add.sprite(55, 100, 'cardBack');
    this.computerBattleMatOne.scale.setTo(3.1, 1);
    this.computerBattleMatOne.alpha = (0.5);
    
    this.playerBattleMatTwo = this.game.add.sprite(185, 200, 'cardBack');
    this.playerBattleMatTwo.scale.setTo(3.1, 1);
    this.playerBattleMatTwo.alpha = (0.5);
    this.playerBattleMatTwo.inputEnabled = true;
    
    this.computerBattleMatTwo = this.game.add.sprite(185, 100, 'cardBack');
    this.computerBattleMatTwo.scale.setTo(3.1, 1);
    this.computerBattleMatTwo.alpha = (0.5);
    
    this.playerBattleMatThree = this.game.add.sprite(315, 200, 'cardBack');
    this.playerBattleMatThree.scale.setTo(3.1, 1);
    this.playerBattleMatThree.alpha = (0.5);
    this.playerBattleMatThree.inputEnabled = true;
    
    this.computerBattleMatThree = this.game.add.sprite(315, 100, 'cardBack');
    this.computerBattleMatThree.scale.setTo(3.1, 1);
    this.computerBattleMatThree.alpha = (0.5);
    
    this.playerBattleMatFour = this.game.add.sprite(445, 200, 'cardBack');
    this.playerBattleMatFour.scale.setTo(3.1, 1);
    this.playerBattleMatFour.alpha = (0.5);
    this.playerBattleMatFour.inputEnabled = true;
    
    this.computerBattleMatFour = this.game.add.sprite(445, 100, 'cardBack');
    this.computerBattleMatFour.scale.setTo(3.1, 1);
    this.computerBattleMatFour.alpha = (0.5); 
    
    // Create the card sprites
    this.s01 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',0);
    this.s01.anchor.setTo(0.5);
    this.s01.scale.setTo(0.13, 0.135);
    this.s01.customParams = {value: 14, suit:1};
    this.s01.inputEnabled = true;
    this.s02 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',1);
    this.s02.anchor.setTo(0.5);
    this.s02.scale.setTo(0.13, 0.135);
    this.s02.customParams = {value: 2, suit:1};
    this.s02.inputEnabled = true;
    this.s03 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',2);
    this.s03.anchor.setTo(0.5);
    this.s03.scale.setTo(0.13, 0.135);
    this.s03.customParams = {value: 3, suit:1};
    this.s03.inputEnabled = true;
    this.s04 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',3);
    this.s04.anchor.setTo(0.5);
    this.s04.scale.setTo(0.13, 0.135);
    this.s04.customParams = {value: 4, suit:1};
    this.s04.inputEnabled = true;
    this.s05 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',4);
    this.s05.anchor.setTo(0.5);
    this.s05.scale.setTo(0.13, 0.135);
    this.s05.customParams = {value: 5, suit:1};
    this.s05.inputEnabled = true;
    this.s06 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',5);
    this.s06.anchor.setTo(0.5);
    this.s06.scale.setTo(0.13, 0.135);
    this.s06.customParams = {value: 6, suit:1};
    this.s06.inputEnabled = true;
    this.s07 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',6);
    this.s07.anchor.setTo(0.5);
    this.s07.scale.setTo(0.13, 0.135);
    this.s07.customParams = {value: 7, suit:1};
    this.s07.inputEnabled = true;
    this.s08 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',7);
    this.s08.anchor.setTo(0.5);
    this.s08.scale.setTo(0.13, 0.135);
    this.s08.customParams = {value: 8, suit:1};
    this.s08.inputEnabled = true;
    this.s09 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',8);
    this.s09.anchor.setTo(0.5);
    this.s09.scale.setTo(0.13, 0.135);
    this.s09.customParams = {value: 9, suit:1};
    this.s09.inputEnabled = true;
    this.s10 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',9);
    this.s10.anchor.setTo(0.5);
    this.s10.scale.setTo(0.13, 0.135);
    this.s10.customParams = {value: 10, suit:1};
    this.s10.inputEnabled = true;
    this.s11 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',10);
    this.s11.anchor.setTo(0.5);
    this.s11.scale.setTo(0.13, 0.135);
    this.s11.customParams = {value: 11, suit:1};
    this.s11.inputEnabled = true;
    this.s12 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',11);
    this.s12.anchor.setTo(0.5);
    this.s12.scale.setTo(0.13, 0.135);
    this.s12.customParams = {value: 12, suit:1};
    this.s12.inputEnabled = true;
    this.s13 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',12);
    this.s13.anchor.setTo(0.5);
    this.s13.scale.setTo(0.13, 0.135);
    this.s13.customParams = {value: 13, suit:1};
    this.s13.inputEnabled = true;
    
    this.c01 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',12);
    this.c01.anchor.setTo(0.5);
    this.c01.scale.setTo(0.13, 0.135);
    this.c01.customParams = {value: 14, suit:2};
    this.c01.inputEnabled = true;
    this.c02 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',14);
    this.c02.anchor.setTo(0.5);
    this.c02.scale.setTo(0.13, 0.135);
    this.c02.customParams = {value: 2, suit:2};
    this.c02.inputEnabled = true;
    this.c03 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',15);
    this.c03.anchor.setTo(0.5);
    this.c03.scale.setTo(0.13, 0.135);
    this.c03.customParams = {value: 3, suit:2};
    this.c03.inputEnabled = true;
    this.c04 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',16);
    this.c04.anchor.setTo(0.5);
    this.c04.scale.setTo(0.13, 0.135);
    this.c04.customParams = {value: 4, suit:2};
    this.c04.inputEnabled = true;
    this.c05 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',17);
    this.c05.anchor.setTo(0.5);
    this.c05.scale.setTo(0.13, 0.135);
    this.c05.customParams = {value: 5, suit:2};
    this.c05.inputEnabled = true;
    this.c06 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',18);
    this.c06.anchor.setTo(0.5);
    this.c06.scale.setTo(0.13, 0.135);
    this.c06.customParams = {value: 6, suit:2};
    this.c06.inputEnabled = true;
    this.c07 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',19);
    this.c07.anchor.setTo(0.5);
    this.c07.scale.setTo(0.13, 0.135);
    this.c07.customParams = {value: 7, suit:2};
    this.c07.inputEnabled = true;
    this.c08 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',20);
    this.c08.anchor.setTo(0.5);
    this.c08.scale.setTo(0.13, 0.135);
    this.c08.customParams = {value: 8, suit:2};
    this.c08.inputEnabled = true;
    this.c09 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',21);
    this.c09.anchor.setTo(0.5);
    this.c09.scale.setTo(0.13, 0.135);
    this.c09.customParams = {value: 9, suit:2};
    this.c09.inputEnabled = true;
    this.c10 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',22);
    this.c10.anchor.setTo(0.5);
    this.c10.scale.setTo(0.13, 0.135);
    this.c10.customParams = {value: 10, suit:2};
    this.c10.inputEnabled = true;
    this.c11 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',23);
    this.c11.anchor.setTo(0.5);
    this.c11.scale.setTo(0.13, 0.135);
    this.c11.customParams = {value: 11, suit:2};
    this.c11.inputEnabled = true;
    this.c12 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',24);
    this.c12.anchor.setTo(0.5);
    this.c12.scale.setTo(0.13, 0.135);
    this.c12.customParams = {value: 12, suit:2};
    this.c12.inputEnabled = true;
    this.c13 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',25);
    this.c13.anchor.setTo(0.5);
    this.c13.scale.setTo(0.13, 0.135);
    this.c13.customParams = {value: 13, suit:2};
    this.c13.inputEnabled = true;
    
    this.d01 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',26);
    this.d01.anchor.setTo(0.5);
    this.d01.scale.setTo(0.13, 0.135);
    this.d01.customParams = {value: 14, suit:8};
    this.d01.inputEnabled = true;
    this.d02 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',27);
    this.d02.anchor.setTo(0.5);
    this.d02.scale.setTo(0.13, 0.135);
    this.d02.customParams = {value: 2, suit:8};
    this.d02.inputEnabled = true;
    this.d03 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',28);
    this.d03.anchor.setTo(0.5);
    this.d03.scale.setTo(0.13, 0.135);
    this.d03.customParams = {value: 3, suit:8};
    this.d03.inputEnabled = true;
    this.d04 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',29);
    this.d04.anchor.setTo(0.5);
    this.d04.scale.setTo(0.13, 0.135);
    this.d04.customParams = {value: 4, suit:8};
    this.d04.inputEnabled = true;
    this.d05 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',30);
    this.d05.anchor.setTo(0.5);
    this.d05.scale.setTo(0.13, 0.135);
    this.d05.customParams = {value: 5, suit:8};
    this.d05.inputEnabled = true;
    this.d06 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',31);
    this.d06.anchor.setTo(0.5);
    this.d06.scale.setTo(0.13, 0.135);
    this.d06.customParams = {value: 6, suit:8};
    this.d06.inputEnabled = true;
    this.d07 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',32);
    this.d07.anchor.setTo(0.5);
    this.d07.scale.setTo(0.13, 0.135);
    this.d07.customParams = {value: 7, suit:8};
    this.d07.inputEnabled = true;
    this.d08 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',33);
    this.d08.anchor.setTo(0.5);
    this.d08.scale.setTo(0.13, 0.135);
    this.d08.customParams = {value: 8, suit:8};
    this.d08.inputEnabled = true;
    this.d09 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',34);
    this.d09.anchor.setTo(0.5);
    this.d09.scale.setTo(0.13, 0.135);
    this.d09.customParams = {value: 9, suit:8};
    this.d09.inputEnabled = true;
    this.d10 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',35);
    this.d10.anchor.setTo(0.5);
    this.d10.scale.setTo(0.13, 0.135);
    this.d10.customParams = {value: 10, suit:8};
    this.d10.inputEnabled = true;
    this.d11 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',36);
    this.d11.anchor.setTo(0.5);
    this.d11.scale.setTo(0.13, 0.135);
    this.d11.customParams = {value: 11, suit:8};
    this.d11.inputEnabled = true;
    this.d12 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',37);
    this.d12.anchor.setTo(0.5);
    this.d12.scale.setTo(0.13, 0.135);
    this.d12.customParams = {value: 12, suit:8};
    this.d12.inputEnabled = true;
    this.d13 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',38);
    this.d13.anchor.setTo(0.5);
    this.d13.scale.setTo(0.13, 0.135);
    this.d13.customParams = {value: 13, suit:8};
    this.d13.inputEnabled = true;
    
    this.h01 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',39);
    this.h01.anchor.setTo(0.5);
    this.h01.scale.setTo(0.13, 0.135);
    this.h01.customParams = {value: 14, suit:4};
    this.h01.inputEnabled = true;
    this.h02 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',40);
    this.h02.anchor.setTo(0.5);
    this.h02.scale.setTo(0.13, 0.135);
    this.h02.customParams = {value: 2, suit:4};
    this.h02.inputEnabled = true;
    this.h03 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',41);
    this.h03.anchor.setTo(0.5);
    this.h03.scale.setTo(0.13, 0.135);
    this.h03.customParams = {value: 3, suit:4};
    this.h03.inputEnabled = true;
    this.h04 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',42);
    this.h04.anchor.setTo(0.5);
    this.h04.scale.setTo(0.13, 0.135);
    this.h04.customParams = {value: 4, suit:4};
    this.h04.inputEnabled = true;
    this.h05 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',43);
    this.h05.anchor.setTo(0.5);
    this.h05.scale.setTo(0.13, 0.135);
    this.h05.customParams = {value: 5, suit:4};
    this.h05.inputEnabled = true;
    this.h06 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',44);
    this.h06.anchor.setTo(0.5);
    this.h06.scale.setTo(0.13, 0.135);
    this.h06.customParams = {value: 6, suit:4};
    this.h06.inputEnabled = true;
    this.h07 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',45);
    this.h07.anchor.setTo(0.5);
    this.h07.scale.setTo(0.13, 0.135);
    this.h07.customParams = {value: 7, suit:4};
    this.h07.inputEnabled = true;
    this.h08 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',46);
    this.h08.anchor.setTo(0.5);
    this.h08.scale.setTo(0.13, 0.135);
    this.h08.customParams = {value: 8, suit:4};
    this.h08.inputEnabled = true;
    this.h09 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',47);
    this.h09.anchor.setTo(0.5);
    this.h09.scale.setTo(0.13, 0.135);
    this.h09.customParams = {value: 9, suit:4};
    this.h09.inputEnabled = true;
    this.h10 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',48);
    this.h10.anchor.setTo(0.5);
    this.h10.scale.setTo(0.13, 0.135);
    this.h10.customParams = {value: 10, suit:4};
    this.h10.inputEnabled = true;
    this.h11 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',49);
    this.h11.anchor.setTo(0.5);
    this.h11.scale.setTo(0.13, 0.135);
    this.h11.customParams = {value: 11, suit:4};
    this.h11.inputEnabled = true;
    this.h12 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',50);
    this.h12.anchor.setTo(0.5);
    this.h12.scale.setTo(0.13, 0.135);
    this.h12.customParams = {value: 12, suit:4};
    this.h12.inputEnabled = true;
    this.h13 = this.game.add.sprite(this.game.world.centerX * 100, this.game.world.centerY, 'cards',51);
    this.h13.anchor.setTo(0.5);
    this.h13.scale.setTo(0.13, 0.135);
    this.h13.customParams = {value: 13, suit:4};
    this.h13.inputEnabled = true;
    
    // Create the arrays
    this.standardDeck = [];
    this.playerDeck = [];
    this.computerDeck = [];
    this.playerHand = [];
    this.computerHand = [];
    this.playerBattleOneHand = [];
    this.playerBattleOneSuit = [];
    this.playerBattleTwoHand = [];
    this.playerBattleTwoSuit = [];
    this.playerBattleThreeHand = [];
    this.playerBattleThreeSuit = [];
    this.playerBattleFourHand = [];
    this.playerBattleFourSuit = [];
    this.computerBattleOneHand = [];
    this.computerBattleOneSuit = [];
    this.computerBattleTwoHand = [];
    this.computerBattleTwoSuit = [];
    this.computerBattleThreeHand = [];
    this.computerBattleThreeSuit = [];
    this.computerBattleFourHand = [];
    this.computerBattleFourSuit = [];
    this.playerDiscard = [];
    this.computerDiscard = [];
    this.playerHandPositions = [{x:270, y:320}, {x: 290, y:320}, {x:310, y:320}, {x:330, y:320}, {x:350, y:320}, {x:370, y:320}];
    this.computerHandPositions = [{x:270, y:40}, {x:290, y:40}, {x:310, y:40}, {x:330, y:40}, {x:350, y:40}, {x:370, y:40}];
    this.playerBattleOnePositions = [{x: 75, y: 230}, {x: 95, y: 230}, {x: 115, y: 230}, {x: 135, y: 230}, {x: 155, y: 230}];
    this.computerBattleOnePositions = [{x: 75, y: 130}, {x: 95, y: 130}, {x: 115, y: 130}, {x: 135, y: 130}, {x: 155, y: 130}];
    this.playerBattleTwoPositions = [{x: 205, y: 230}, {x: 225, y: 230}, {x: 245, y: 230}, {x: 265, y: 230}, {x: 285, y: 230}];
    this.computerTwoBattleTwoPositions = [{x: 205, y: 130}, {x: 225, y: 130}, {x: 245, y: 130}, {x: 265, y: 130}, {x: 285, y: 130}];
    this.playerBattleThreePositions = [{x: 335, y: 230}, {x: 355, y: 230}, {x: 375, y: 230}, {x: 395, y: 230}, {x: 415, y: 230}];
    this.computerBattleThreePositions = [{x: 335, y: 130}, {x: 355, y: 130}, {x: 375, y: 130}, {x: 395, y: 130}, {x: 415, y: 130}];
    this.playerBattleFourPositions = [{x: 465, y: 230}, {x: 485, y: 230}, {x: 505, y: 230}, {x: 525, y: 230}, {x: 545, y: 230}];
    this.computerBattleFourPositions = [{x: 465, y: 130}, {x: 485, y: 130}, {x: 505, y: 130}, {x: 525, y: 130}, {x: 545, y: 130}];
    
    // Create the standard deck
    this.standardDeck.splice(0, 0, this.s01, this.s02, this.s03, this.s04, this.s05, this.s06, this.s07, this.s08, this.s09, this.s10, this.s11, this.s12, this.s13, this.d01, this.d02, this.d03, this.d04, this.d05, this.d06, this.d07, this.d08, this.d09, this.d10, this.d11, this.d12, this.d13, this.c01, this.c02, this.c03, this.c04, this.c05, this.c06, this.c07, this.c08, this.c09, this.c10, this.c11, this.c12, this.c13, this.h01, this.h02, this.h03, this.h04, this.h05, this.h06, this.h07, this.h08, this.h09, this.h10, this.h11, this.h12, this.h13);
    
    // Shuffle the standard deck
    Phaser.ArrayUtils.shuffle(this.standardDeck);
    
    // Create the playing decks
    this.playerDeck = this.standardDeck.splice(0, 26);
    this.computerDeck = this.standardDeck.splice(0, 26);
    
    // Create the Initial Hands
    this.playerHand = this.playerDeck.splice(0, 5);
    this.computerHand = this.computerDeck.splice(0, 5);
    
    // Move the sprites to their respective playing hand areas
    this.playerHand[0].x = this.playerHandPositions[0].x;
    this.playerHand[0].y = this.playerHandPositions[0].y;
    this.playerHand[0].bringToTop();
    this.playerHand[1].x = this.playerHandPositions[1].x;
    this.playerHand[1].y = this.playerHandPositions[1].y;
    this.playerHand[1].bringToTop();
    this.playerHand[2].x = this.playerHandPositions[2].x;
    this.playerHand[2].y = this.playerHandPositions[2].y;
    this.playerHand[2].bringToTop();
    this.playerHand[3].x = this.playerHandPositions[3].x;
    this.playerHand[3].y = this.playerHandPositions[3].y;
    this.playerHand[3].bringToTop();
    this.playerHand[4].x = this.playerHandPositions[4].x;
    this.playerHand[4].y = this.playerHandPositions[4].y;
    this.playerHand[4].bringToTop();
    
    this.computerHand[0].x = this.computerHandPositions[0].x;
    this.computerHand[0].y = this.computerHandPositions[0].y;
    this.computerHand[0].bringToTop();
    this.computerHand[1].x = this.computerHandPositions[1].x;
    this.computerHand[1].y = this.computerHandPositions[1].y;
    this.computerHand[1].bringToTop();
    this.computerHand[2].x = this.computerHandPositions[2].x;
    this.computerHand[2].y = this.computerHandPositions[2].y;
    this.computerHand[2].bringToTop();
    this.computerHand[3].x = this.computerHandPositions[3].x;
    this.computerHand[3].y = this.computerHandPositions[3].y;
    this.computerHand[3].bringToTop();
    this.computerHand[4].x = this.computerHandPositions[4].x;
    this.computerHand[4].y = this.computerHandPositions[4].y;
    this.computerHand[4].bringToTop();  
    
    // Decide who plays first
    this.playerTurn = false;
    this.computerTurn = false;
    this.randomNumberStart = this.game.rnd.integerInRange(1,1);
    if (this.randomNumberStart == 1) {
      this.playerTurn = true;
    }
    else {
      this.computerTurn = true;
    }
  },
  
  playRound: function() {
    if (this.playerTurn) {
      // Draw a card
      this.drawCard(this.playerHand, this.playerDeck, this.playerHandPositions);
      // Select a card from your hand
      this.selectCard(this.playerHand, this.playerHandPositions);
      // Check the battle mats
      this.checkPlayerBattleMats();
      // Play a card in a battle area buy clicking the mat
      this.playCard(this.playerHand, this.playerHandPositions);
    }
    else if (this.computerTurn) {
      // Computer Draws a Card
      this.drawCard(this.computerHand, this.computerDeck, this.computerHandPositions);
      // Check which battle areas are available
      this.checkComputerBattleAreas();
      // Choose a battle area to play
      this.chooseComputerBattleArea();
      // Select a card
      this.computerSelectCard(); 
    }
    else {
      // Game is Over
    }
  },

  drawCard: function (hand, deck, positions) {
    // Draw a card, move the sprite from the deck array into the hand array, display the sprite
    hand.splice(5, 0, deck[0]);
    deck.splice(0,1);
    hand[5].x = positions[5].x;
    hand[5].y = positions[5].y;
    hand[5].bringToTop();
  },
  
  selectCard: function(hand, positions) {
    hand[0].events.onInputDown.add(function(){
      if (hand[0].y == positions[0].y) {
        hand[0].y = positions[0].y - 20;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
    hand[1].events.onInputDown.add(function(){
      if (hand[1].y == positions[1].y) {
        hand[1].y = positions[1].y - 20;
        hand[0].y = positions[0].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
    hand[2].events.onInputDown.add(function(){
      if (hand[2].y == positions[2].y) {
        hand[2].y = positions[2].y - 20;
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
    hand[3].events.onInputDown.add(function(){
      if (hand[3].y == positions[3].y) {
        hand[3].y = positions[3].y - 20;
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
    hand[4].events.onInputDown.add(function(){
      if (hand[4].y == positions[4].y) {
        hand[4].y = positions[4].y - 20;
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[5].y = positions[5].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
    hand[5].events.onInputDown.add(function(){
      if (hand[5].y == positions[5].y) {
        hand[5].y = positions[5].y - 20;
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
      }
      else {
        hand[0].y = positions[0].y;
        hand[1].y = positions[1].y;
        hand[2].y = positions[2].y;
        hand[3].y = positions[3].y;
        hand[4].y = positions[4].y;
        hand[5].y = positions[5].y;
      }
    }, this);
  },
  
  checkPlayerBattleMats: function () {
    // Check which battle areas are available
    if (this.playerBattleOneHand.length == 5) {
      this.playerBattleMatOne.inputEnabled = false;
    }
    if (this.playerBattleTwoHand.length == 5) {
      this.playerBattleMatOne.inputEnabled = false;
    }
    if (this.playerBattleThreeHand.length == 5) {
      this.playerBattleMatOne.inputEnabled = false;
    }
    if (this.playerBattleFourHand.length == 5) {
      this.playerBattleMatOne.inputEnabled = false;
    }
  },
  
  checkComputerBattleAreas: function() {
    if (this.computerBattleOneHand.length == 5) {
      this.battleOneAvailable = false;
    }
    else {
      this.battleOneAvailable = true;
    }
    if (this.computerBattleTwoHand.length == 5) {
      this.battleTwoAvailable = false;
    }
    else {
      this.battleTwoAvailable = true;
    }
    if (this.computerBattleThreeHand.length == 5) {
      this.battleThreeAvailable = false;
    }
    else {
      this.battleThreeAvailable = true;
    }
    if (this.computerBattleFourHand.length == 5) {
      this.battleFourAvailable = false;
    }
    else {
      this.battleFourAvailable = true;
    }
  },
  
  chooseComputerBattleArea: function() {
    // Select a random battle Area
    this.randomNumberChooser = this.game.rnd.integerInRange(1,4);
    if (this.randomNumberChooser == 1) {
      // Check to see if area 1 is full
      if (this.battleOneAvailable) {
        this.number = 1;
      }
      else {
        // Rerun the function
        this.chooseComputerBattleArea();
      } 
    }
    else if (this.randomNumberChooser == 2){
      // Check to see if area 2 is full
      if (this.battleTwoAvailable) {
        this.number = 2;
      }
      else {
        // Rerun the function
        this.chooseComputerBattleArea();
      } 
    }
    else if (this.randomNumberChooser == 3) {
      // Check to see if area 3 is full
      if (this.battleThreeAvailable) {
        this.number = 3;
      }
      else {
        // Rerun the function
        this.chooseComputerBattleArea();
      } 
    }
    else if (this.randomNumberChooser == 4) {
      // Check to see if area 4 is full
      if (this.battleFourAvailable) {
        this.number = 4;
      }
      else {
        // Rerun the function
        this.chooseComputerBattleArea();
      } 
    }
  },
  
  playCard: function(hand, positions) {
   this.playerBattleMatOne.events.onInputDown.add(function(){
     if (hand[0].y == positions[0].y - 20) { 
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[0]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[0].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(0, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[1].y == positions[1].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[1]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[1].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(1, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[2].y == positions[2].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[2]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[2].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(2, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[3].y == positions[3].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[3]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[3].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(3, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[4].y == positions[4].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[4]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[4].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(4, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[5].y == positions[5].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleOneHand.splice(this.playerBattleOneHand.length, 0, hand[5]);
       this.playerBattleOneSuit.splice(this.playerBattleOneSuit.length, 0, hand[5].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(5, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].x = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].x;
       
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].y = this.playerBattleOnePositions[this.playerBattleOneHand.length - 1].y;
       this.playerBattleOneHand[this.playerBattleOneHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleOneHand);
       console.log(this.playerBattleOneSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else {
       // Pick a card
       console.log("pick a card");
     }
   }, this);
    this.playerBattleMatTwo.events.onInputDown.add(function(){
     if (hand[0].y == positions[0].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[0]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[0].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(0, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[1].y == positions[1].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[1]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[1].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(1, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[2].y == positions[2].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[2]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[2].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(2, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[3].y == positions[3].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[3]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[3].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(3, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[4].y == positions[4].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[4]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[4].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(4, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[5].y == positions[5].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleTwoHand.splice(this.playerBattleTwoHand.length, 0, hand[5]);
       this.playerBattleTwoSuit.splice(this.playerBattleTwoSuit.length, 0, hand[5].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(5, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].x = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].x;
       
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].y = this.playerBattleTwoPositions[this.playerBattleTwoHand.length - 1].y;
       this.playerBattleTwoHand[this.playerBattleTwoHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleTwoHand);
       console.log(this.playerBattleTwoSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else {
       // Pick a card
       console.log("pick a card");
     }
   }, this);
    this.playerBattleMatThree.events.onInputDown.add(function(){
     if (hand[0].y == positions[0].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[0]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[0].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(0, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[1].y == positions[1].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[1]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[1].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(1, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[2].y == positions[2].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[2]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[2].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(2, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[3].y == positions[3].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[3]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[3].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(3, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[4].y == positions[4].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[4]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[4].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(4, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[5].y == positions[5].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleThreeHand.splice(this.playerBattleThreeHand.length, 0, hand[5]);
       this.playerBattleThreeSuit.splice(this.playerBattleThreeSuit.length, 0, hand[5].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(5, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].x = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].x;
       
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].y = this.playerBattleThreePositions[this.playerBattleThreeHand.length - 1].y;
       this.playerBattleThreeHand[this.playerBattleThreeHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleThreeHand);
       console.log(this.playerBattleThreeSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else {
       // Pick a card
       console.log("pick a card");
     }
   }, this);
    this.playerBattleMatFour.events.onInputDown.add(function(){
     if (hand[0].y == positions[0].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[0]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[0].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(0, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[1].y == positions[1].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[1]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[1].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(1, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[2].y == positions[2].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[2]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[2].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(2, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[3].y == positions[3].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[3]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[3].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(3, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[4].y == positions[4].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[4]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[4].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(4, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else if (hand[5].y == positions[5].y - 20) {
       // Move the card from the hand array to the battle area array and suit array
       this.playerBattleFourHand.splice(this.playerBattleFourHand.length, 0, hand[5]);
       this.playerBattleFourSuit.splice(this.playerBattleFourSuit.length, 0, hand[5].customParams.suit);
       
       // Remove the card from the hand array
       hand.splice(5, 1);
       
       // Move the sprite to the correct area and disable input
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].x = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].x;
       
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].y = this.playerBattleFourPositions[this.playerBattleFourHand.length - 1].y;
       this.playerBattleFourHand[this.playerBattleFourHand.length - 1].inputEnabled = false;
       
       
       // Reset the hand positions
       this.resetHand(this.playerHand, this.playerHandPositions);
       console.log(this.playerBattleFourHand);
       console.log(this.playerBattleFourSuit);
       console.log(hand);
       
       // End turn
       this.endTurn(this.playerHand);
     }
     else {
       // Pick a card
       console.log("pick a card");
     }
   }, this);
  },
  
  resetHand: function(hand, positions) {
    hand[0].x = positions[0].x;
    hand[1].x = positions[1].x;
    hand[2].x = positions[2].x;
    hand[3].x = positions[3].x;
    hand[4].x = positions[4].x;
  },
  
  endTurn: function(hand) {
    if(this.playerTurn) {
      this.playerTurn = false;
      this.computerTurn = true;
      // Disable Battle Mats
      this.playerBattleMatOne.inputEnabled = false;
      this.playerBattleMatTwo.inputEnabled = false;
      this.playerBattleMatThree.inputEnabled = false;
      this.playerBattleMatFour.inputEnabled = false;
      // Disable hand
      hand[0].inputEnabled = false;
      hand[1].inputEnabled = false;
      hand[2].inputEnabled = false;
      hand[3].inputEnabled = false;
      hand[4].inputEnabled = false;
      this.playRound();
      
    }
    if (this.computerTurn) {
      this.computerTurn = false;
      this.playerTurn = true;
      // Enable Battle Mats
      this.playerBattleMatOne.inputEnabled = true;
      this.playerBattleMatTwo.inputEnabled = true;
      this.playerBattleMatThree.inputEnabled = true;
      this.playerBattleMatFour.inputEnabled = true;
      // Enable the Hands
      hand[0].inputEnabled = true;
      hand[1].inputEnabled = true;
      hand[2].inputEnabled = true;
      hand[3].inputEnabled = true;
      hand[4].inputEnabled = true;
      this.playRound();
    }
  },
  
  computerSelectCard: function(hand) {
    // Computer selects a random card from its hand
    this.randomNumber = this.game.rnd.integerInRange(0,5);
    //this.randomNumber = 0;
    
    if(this.randomNumber == 0) {
      // Select Card 1 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
    else if (this.randomNumber == 1) {
      // Select Card 2 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
    else if (this.randomNumber == 2) {
      // Select Card 2 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
    else if (this.randomNumber == 3) {
      // Select Card 2 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
    else if (this.randomNumber == 4) {
      // Select Card 2 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
    else {
      // Select Card 2 and move it to a random battle area
      if (this.number == 1) {
        // Move to battle area one
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleOneHand.splice(this.computerBattleOneHand.length, 0, this.computerHand[this.number]);
        this.computerBattleOneSuit.splice(this.computerBattleOneSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].x = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].x;
       
        this.computerBattleOneHand[this.computerBattleOneHand.length - 1].y = this.computerBattleOnePositions[this.computerBattleOneHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 2) {
        // Move to battle area two
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleTwoHand.splice(this.computerBattleTwoHand.length, 0, this.computerHand[this.number]);
        this.computerBattleTwoSuit.splice(this.computerBattleTwoSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].x = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].x;
       
        this.computerBattleTwoHand[this.computerBattleTwoHand.length - 1].y = this.computerBattleTwoPositions[this.computerBattleTwoHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
      else if (this.number == 3) {
        // Move to battle area three
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleThreeHand.splice(this.computerBattleThreeHand.length, 0, this.computerHand[this.number]);
        this.computerBattleThreeSuit.splice(this.computerBattleThreeSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].x = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].x;
       
        this.computerBattleThreeHand[this.computerBattleThreeHand.length - 1].y = this.computerBattleThreePositions[this.computerBattleThreeHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      } 
      else if (this.number == 4) {
        // Move to battle area four
        // Move the card from the hand array to the battle area array and suit array
        this.computerBattleFourHand.splice(this.computerBattleFourHand.length, 0, this.computerHand[this.number]);
        this.computerBattleFourSuit.splice(this.computerBattleFourSuit.length, 0, this.computerHand[this.number].customParams.suit);
        // Remove the card from the hand array
        this.computerHand.splice(this.number, 1);
        // Move the sprite to the correct area and disable input
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].x = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].x;
       
        this.computerBattleFourHand[this.computerBattleFourHand.length - 1].y = this.computerBattleFourPositions[this.computerBattleFourHand.length - 1].y;
        
        // Reset the hand positions
        this.resetHand(this.computerHand, this.computerHandPositions);
        
        // End turn
        this.endTurn(this.computerHand);
      }
    }
  },
  
  rankPokerHand: function(cs,ss) {
  var v, i, o, s = 1<<cs[0]|1<<cs[1]|1<<cs[2]|1<<cs[3]|1<<cs[4];
  for (i=-1, v=o=0; i<5; i++, o=Math.pow(2,cs[i]*4)) {v += o*((v/o&15)+1);}
  v = v % 15 - ((s/(s&-s) == 31) || (s == 0x403c) ? 3 : 1);
  v -= (ss[0] == (ss[1]|ss[2]|ss[3]|ss[4])) * ((s == 0x7c00) ? -5 : 1);
  console.log("Hand: " + this.hands[v] + (s == 0x403c?" (Ace low)":""));
  },
  
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);
var self = this;
game.state.add('main', mainState);
game.state.start('main');