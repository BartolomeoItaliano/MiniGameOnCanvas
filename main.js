/**
 * Created by KurekB on 2016-11-16.
 */
    "use strict";
    var objectsMatchesArray=[];
    var canvas;
    var answersComboBox;
    var spinButton;
    var winLoseImage;
    var audio;

    var loader=new MyLoader();
    loader.load('img/imagesList.json',startGame);




function startGame(){
    createViewElements();
    canvas=document.getElementById("canvasElement").getContext('2d');
    answersComboBox=document.getElementById("answercombobox");
    spinButton=document.getElementById("spinbutton");
    winLoseImage=document.getElementById("winLosInformation");

    loadSymbolsArray(objectsMatchesArray);
    loadSymbolsToComboBox(objectsMatchesArray);

    console.log(loadedResources);
    drawInitialScreen();
    var cutParameter=40;

    spinButton.addEventListener('click',spinSymbols);
}





var isSpinnerRunning=false;
function spinSymbols(){
    audio=new Audio("sounds/SoundOfSilence.mp3");
    audio.play();
    if(!isSpinnerRunning) {
        isSpinnerRunning=true;
        answersComboBox.disabled = true;
        spinButton.disabled = true;
        spinButton.src = "img/BTN_Spin_d.png";
        winLoseImage.src = "img/spinning_info.jpg";
        var SPINEFRAME_Y_MIN = 90;
        var SPINNER_WIDTH = 225;

        var spinSpeed = 20 + Math.floor(Math.random() * 20);

        var cutParameter = 0;
        var imageNumber = 0;
        var spinnerXPosition = 315;
        var spinnerYPosition = 91;


        loop();

    }
    function loop() {

        if(cutParameter>155){
            cutParameter=0;
            imageNumber++;
            spinnerYPosition=SPINEFRAME_Y_MIN;
        }

        if(Math.floor(Math.random()*70)<6){
            spinSpeed--;
        }

        cutParameter+=spinSpeed;
        spinnerYPosition-=spinSpeed;


        canvas.drawImage(loadedResources["BG.png"],0,0,WIDTH,HEIGHT);
        canvas.drawImage(objectsMatchesArray[imageNumber%objectsMatchesArray.length     ].image,0,cutParameter,235,155-cutParameter,spinnerXPosition,spinnerYPosition+cutParameter,SPINNER_WIDTH,155-cutParameter  );
        canvas.drawImage(objectsMatchesArray[(imageNumber+1)%objectsMatchesArray.length ].image,0,0           ,235,155             ,spinnerXPosition,spinnerYPosition+155         ,SPINNER_WIDTH,155               );
        canvas.drawImage(objectsMatchesArray[(imageNumber+2)%objectsMatchesArray.length ].image,0,0           ,235,cutParameter    ,spinnerXPosition,spinnerYPosition+155*2       ,SPINNER_WIDTH,cutParameter      );
        canvas.drawImage(loadedResources["rightArrow.png"],200,150,200,200);
        drawDiscoveredRewardsInformation();

        if(spinSpeed!==0) {
            window.requestAnimationFrame(loop);
        }
        else
        {
            console.log(objectsMatchesArray[(imageNumber+1)%objectsMatchesArray.length ]);
            onSpinnerStopped((imageNumber+1)%objectsMatchesArray.length );

        }
    }
}



function drawInitialScreen(){
    canvas.clearRect(0,0,WIDTH,HEIGHT);
    canvas.drawImage(loadedResources["BG.png"],0,0,WIDTH,HEIGHT);
    canvas.drawImage(objectsMatchesArray[0].image,0,28,235,155-28,315,63+28,225,155-28);
    canvas.drawImage(objectsMatchesArray[1].image,0,0           ,235,155,315,63+155         ,225,155);
    canvas.drawImage(objectsMatchesArray[2].image,0,0           ,235,28 ,315,63+155*2       ,225,28);
    canvas.drawImage(loadedResources["rightArrow.png"],200,145,200,200);
    drawDiscoveredRewardsInformation();
}

function drawDiscoveredRewardsInformation(){
    canvas.font="60px Georgia";
    canvas.fillStyle="white";
    canvas.fillText("Discovered Rewards: "+discoveredRewards+"\/3",100,500);
}



function loadSymbolsToComboBox(objectsMatchesArray){
    for(var i=0;objectsMatchesArray.length>i;i++) {
        var option = document.createElement('option');
        option.text = objectsMatchesArray[i].imageName;
        answersComboBox.add(option, i);
    }
}


function loadSymbolsArray(objectsMatchesArray){
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM1.png"],"wild"));
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM3.png"],"strawberry"));
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM4.png"],"pineapple"));
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM5.png"],"lemon"));
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM6.png"],"watermelon"));
    objectsMatchesArray.push(new ObjectMatch(loadedResources["SYM7.png"],"grapes"));
}

function ObjectMatch(image,imageName){
    this.image=image;
    this.imageName=imageName;
}










