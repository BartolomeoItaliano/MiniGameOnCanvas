/**
 * Created by KurekB on 2016-11-17.
 */

var gamesWon=0;

function onWinEvent(){
    winLoseImage=document.getElementById("winLosInformation");
    winLoseImage.src="img/Win_Information.png";
    console.log("You won");


    gamesWon++;
    if(gamesWon===2)
        makeMichiganFrogDanceToHelloMyBaby();
    else if(gamesWon===3)
        makeMichiganFrogDanceToMichiganRide();
    else if(gamesWon===4)
        makeMichiganFrogDanceToOpera();

}



function onLostEvent(){
    var winLoseImage=document.getElementById("winLosInformation");
    winLoseImage.src="img/Lose_Information.png";
    console.log("You lost");
}




function onSpinnerStopped(winningSymbolPositionInArray){
    isSpinnerRunning=false;
    answersComboBox.disabled=false;
    spinButton.disabled=false;
    spinButton.src="img/BTN_Spin.png";
    console.log(winningSymbolPositionInArray);
    if(objectsMatchesArray[winningSymbolPositionInArray].imageName===answersComboBox.value){
        onWinEvent();
        console.log("wygrałes");
    }
    else
    {
        onLostEvent();
    }
}