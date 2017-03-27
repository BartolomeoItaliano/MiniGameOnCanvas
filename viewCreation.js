/**
 * Created by KurekB on 2016-11-17.
 */
var WIDTH=960;
var HEIGHT=536;
var HEIGHT_RESIZE_PARAM=0.7;



function createViewElements(){
    //====================Canvas===========================
    var canvasElement=document.createElement("canvas");
    canvasElement.id="canvasElement";
    canvasElement.width  = WIDTH;
    canvasElement.height = HEIGHT;
    document.body.appendChild(canvasElement);
    //==================Div Column==========================
    var divColumn=document.createElement("div");
    document.body.appendChild(divColumn);
    divColumn.height=HEIGHT;
    divColumn.className="controls-column";
    //==================WinInfoDiv==========================
    var winLosInfoDiv=document.createElement("div");
    divColumn.appendChild(winLosInfoDiv);
    winLosInfoDiv.className="win-los-block";
    //winLosInfoDiv.style.height=HEIGHT/2*HEIGHT_RESIZE_PARAM +"px";
    //==================Initial Information==========================
    var initialInformation=document.createElement("IMG");
    initialInformation.id="winLosInformation";
    initialInformation.src="img/Initial_Information.png";
    initialInformation.className="win-los-image";
    winLosInfoDiv.appendChild(initialInformation);
    //==================Answer Combo box====================
    var combobox=document.createElement("select");
    combobox.id="answercombobox";
    combobox.className="answer-combo-box";
    divColumn.appendChild(combobox);
    //=================Spin Button=========================
    var buttonElement=document.createElement("IMG");
    buttonElement.id="spinbutton";
    buttonElement.className="spin-me-button";
    buttonElement.src="img/BTN_Spin.png"
    //buttonElement.innerHTML="Spin me!";
    divColumn.appendChild(buttonElement);
}
