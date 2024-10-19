let mainInstructions = {
    preload: loadInstructions,
    create: initialiseInstructions,
};

function loadInstructions() {

    game.load.spritesheet('backButton', 'assets/imgs/backButton.png', 134, 147);
    game.load.image('bg', 'assets/imgs/bg-main.png');
    game.load.image('btb', 'assets/imgs/backToBits.png');
}

function initialiseInstructions() {
    bg =game.add.sprite(0, 0, 'bg');
    bg.sendToBack();

    instructionText = game.add.text(GAME_STAGE_WIDTH/2, 60,
    "Instructions:\n\nClick a play button to start\nArrows or mouse to move\nSpace or click to shoot enemies", {
    font: 'Silkscreen',
    fontSize: '32px',
    fill:  textColor,
    align: 'center'
    });
    instructionText.anchor.setTo(0.5, 0);

    creditText = game.add.text(40, GAME_STAGE_HEIGHT/2 - 20,
    "Back to FLASH\n\tAlejandro\n\tDiego\n\tEdward", {
    font: 'Silkscreen',
    fontSize: '32px',
    fill:  textColor,
    });
    creditText.anchor.setTo(0, 0);

    btblogo = game.add.sprite(GAME_STAGE_WIDTH - 40, GAME_STAGE_HEIGHT/2 - 20, 'btb');
    btblogo.anchor.setTo(1, 0);
    btblogo.scale.x = 0.2;
    btblogo.scale.y = 0.2;

    buttonI = game.add.button(GAME_STAGE_WIDTH/2 - 372, GAME_STAGE_HEIGHT - 100, 'backButton', backToMenu, this, 1, 2, 0);
    buttonI.scale.setTo(0.5, 0.5);

}



function backToMenu(){

    GoTo('menu');
    soundController.PlayEffect(1);
}