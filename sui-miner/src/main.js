const UWU = function(){
    var canvas = document.getElementById('ma queue');
    var c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //create empty array
    var images = [];
    images.length = 3;

    //push the image into array

    for(var i = 1 ; i < images.length ; i++){
        images[i] = new Image();
        images[i].src = "/drill(" + i + ").png";
    }
    var i = 1;
    setInterval(function(){
        i++;
        if(i>=3){
            i = 1;
        }
        c.drawImage(images[i],100,100,100,100);
    },200)
}
export default UWU

