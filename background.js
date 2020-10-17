const body = document.querySelector("body");

const IMG_NUMBER =3;

function paintImage(imgNumber){

    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);

    /* 이렇게도 가능하다 */
 //   img.src = `/images/${imgNumber+1}.jpg`;

}


function getRandom(){
    const number = Math.floor((Math.random()*IMG_NUMBER)+1);
    return number;
}


function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);


}

init();