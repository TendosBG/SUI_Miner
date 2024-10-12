var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create empty array
var images = [];
images.length = 10;

//push the image into array

for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'Walk (' + i + ').png'
}
var i = 1;
setInterval(function(){
    i++;
    if(i>=10){
        i = 1
    }
    c.drawImage(images[i],100,100,100,100)
},200)



