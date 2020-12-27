let gCanvasWidth = 1000;
let gCanvasWidth = 1000;

let memeSize = 300;
let memeWidth = 0;
let memeHeight = 0;
let canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

// set the text style for customization 

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// grab nodes for the images

let img = new Image();
let topText = '';
let bottomText = '';

// when the images are loaded

img.onload = function(){
    calculateCanvas();
    drawMeme();
}

function drawMeme(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

    ctx.lineWidth = 8;
    ctx.font = 'bold 50pt Impact';
    ctx.strokeStyle = 'black';
    ctx.mutterLine = 2;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';


    let text1 = topText;
    
    text1 = text1.toUpperCase();
    x = memeWidth / 2;
    y = 0;

    wrapText(ctx, text1, x, y, memeWidth, 1.6 false, 50);


    ctx.textBaseline = 'bottom';
    let text2 = bottomText; 

    text2 = text2.toUpperCase();
    y = memeHeight;

    wrapText(ctx, text2, x ,y, memeWidth, 1.6, true, 50);
}

function wrapText(context, text, x, y, maxWidth, lineHeightRatio, fromBottom, fontSize){
    context.font = 'bold' + fontSize + 'pt Impact';

    let pushMethod = (fromBottom)?'unshift':'push';
    _lineHeightRatio = (fromBottom)?-lineHeightRatio:lineHeightRatio;
    let lineHeight = _lineHeightRatio * fontSize;
    console.log('lineH', lineHeight, lineHeightRatio, fontSize);

    let lines = [];
    let y = y; 
    let line = '';
    let words = text.split('');

    for(var i = 0; i < words.length; i++){
        let testLine = line + '' + words [i];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;

        if(testWidth > maxWidth){
            lines[pushMethod](line);
            line = words[n] + '';
        }else{
            line = testLine;
        }
    }
    lines[pushMethod](line); 

    if(lines.length > 2){
        console.log('too big', fontSize);
        wrapText(context, text, x, y, maxWidth, lineHeightRatio, fromBottom,  fontSize - 10);
    }
    else{
        for(var k in lines){
            context.strokeText(lines[k], x, y + lineHeight * k );
            context.fillText(lines[k], x, y + lineHeight * k);
        }
    }
}

function calculateCanvas(){
    console.log(img.width, img.height);
    if(img.width > img.height){
        canvas.height = img.height / img.width * canvas.width;
        memeWidth = canvas.width;
        memeHeight = canvas.height;
        console.log(canvas.width, canvas.height);
    }
}

let writeText = function(text, x, y){
    let f = 60; // font size in pt points
    for(;f >= 30; f -=1){
        ctx.font = 'bold' + f + 'pt Impact';
        if(ctx.measureText(text).width < memeWidth - 10){
            ctx.fillText(text, x, y);
            ctx.strokeText(text, x, y);
            break;
        }
    }
};

let imgSrc = 
img.src = '';










// Onclick event for "Submit" button
// $('#submit-button').on("click", function(event){ 
//  event.preventDefault(); 
// });

// //Onclick event for "Edit" button
// $('.meme-it').on("click", function(event){ 
//  event.preventDefault(); 
// });


// API cloudinary 
// var cloudinary = require('cloudinary').v2;
// npm install cloudinary

// const apiURL = cloudinary:948734667294862:4XJqxYQQt3AxODmqrOyYRc0JOO0@opepope;


//  $(document).ready(function(){
//         var maina=$("<a id='mod' class='waves-effect waves-light btn modal-trigger modal-btn' href='#modal1'><i class='fad fa-question question'></i>")
//     $(".mymodal").append(maina) 
//        $("#mod").click(function (){
//             showModal(); 
//         $('.modal').modal();
//        $('#modal1').modal('open');
//       $('#cls').click(function(){
//           $('#modal1').modal('close');
//       });
//           })
//                });




//  $.ajax("api.cloudinary.com/v1_1/opepope", {
//       type: "POST",
//       data: newMeme,
//     }).then(() => {
//       console.log("got the meme", newMeme);
//       // Reload the page to get the updated list
//       location.reload();
//     });