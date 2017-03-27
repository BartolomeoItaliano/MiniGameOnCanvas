/**
 * Created by KurekB on 2016-11-16.
 */

var loadedResources=new Object();




function MyLoader(){

    var callbackOnLoaded=function(){};

    var _images;

    function OnLoading(){
        this.imagesToLoad=0;
        this.imagesLoaded=0;
    }


    var onLoading=new OnLoading();

    this.load=function(pathToJSON,callbackOnLoadedD){
        callbackOnLoaded=callbackOnLoadedD;
        loadJSON(pathToJSON,
            function(res){
                _images = JSON.parse(res);
                loadImages();
                for (var image in _images) {
                    onLoading.imagesToLoad++;
                }
            }
        );
    };

    function loadImages(){

        for(var image in _images) {
            var imageObj = new Image();
            loadedResources[image]=imageObj;
            imageObj.onload = function () {
                onLoading.imagesLoaded++;
                if(onLoading.imagesLoaded===onLoading.imagesToLoad){
                    callbackOnLoaded();
                }
            }
            imageObj.src = _images[image].imgPath;
        }

        console.log(_images, onLoading, onLoading.imagesToLoad);
    };
}



function loadJSON(pathToJSON,callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', pathToJSON, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}