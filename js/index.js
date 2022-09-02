/*function newImg(){
    document.slide.src = 'images/bass.jpg';
}
window.onload = newImg;*/

var i = 0;
var time = 3000;
var images = [];

            images[0] = './images/gs1.jpg';
            images[1] = './images/gs2.jpg';
            images[2] = './images/gs3.jpg';
            images[3] = './images/gs4.jpg';


    function changeImg(){
    document.slide.src = images[i];

        if(i < images.length - 1){
                i++
        }else {
                i = 0
        }
        setTimeout("changeImg()", time);

        }
    window.onload = changeImg;

console.log("here2")






