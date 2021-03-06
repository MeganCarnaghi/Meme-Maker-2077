// When "Choose File" button is selected in step 1, add file name to span
document.getElementById("img-input").onchange = function () {
  document.getElementById("choose-file").value = this.value;
};

//start here
let topTextInput,
  bottomTextInput,
  topTextSizeInput,
  bottomTextSizeInput,
  imageInput,
  generateBtn2,
  canvas,
  ctx;

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  let fontSize;

  // Size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw main image
  ctx.drawImage(img, 0, 0);

  // Text style: white with black borders
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";

  // Top text font size
  fontSize = canvas.width * topTextSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 20;

  // Draw top text
  ctx.textBaseline = "top";
  topText.split("\n").forEach(function (t, i) {
    ctx.fillText(t.toUpperCase(), canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(
      t.toUpperCase(),
      canvas.width / 2,
      i * fontSize,
      canvas.width
    );
  });

  // Bottom text font size
  fontSize = canvas.width * bottomTextSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 20;

  // Draw bottom text
  ctx.textBaseline = "bottom";
  bottomText
    .split("\n")
    .reverse()
    .forEach(function (t, i) {
      // .reverse() because it's drawing the bottom text from the bottom up
      ctx.fillText(
        t.toUpperCase(),
        canvas.width / 2,
        canvas.height - i * fontSize,
        canvas.width
      );
      ctx.strokeText(
        t.toUpperCase(),
        canvas.width / 2,
        canvas.height - i * fontSize,
        canvas.width
      );
    });
}

function init() {
  topTextInput = document.getElementById("top");
  bottomTextInput = document.getElementById("bottom");
  topTextSizeInput = document.getElementById("top-text-size-input");
  bottomTextSizeInput = document.getElementById("bottom-text-size-input");
  imageInput = document.getElementById("img-input");
  generateBtn2 = document.getElementById("generate-btn-2");
  canvas = document.getElementById("meme-canvas");
  ctx = canvas.getContext("2d");
  downloadBtn = document.getElementById("download-btn");

  // set canvas to zero so that canvas is the user's upload size
  canvas.width = canvas.height = 0;

  // use the filer reader API
  generateBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    let reader = new FileReader();
    // on load upload the user's image
    reader.onload = () => {
      let img = new Image();
      // image source is equal to the image that the user uploaded
      img.src = reader.result;

      // Displays the "Download" button for the meme
      downloadBtn.classList.add("visibility");

      // call the generate meme function to add the image and input text from user
      img.onload = () => {
        generateMeme(
          img,
          topTextInput.value,
          bottomTextInput.value,
          topTextSizeInput.value,
          bottomTextSizeInput.value
        );
      };
    };

    reader.readAsDataURL(imageInput.files[0]);
  });
}

init();

// end here

//Function to convert the canvas file to a png file and download it
// Download is triggered when "Download" button in step 4 is clicked
function downloadMeme() {
  canvas.toDataURL("image/png");
  var gh = canvas.toDataURL("png");

  var a = document.createElement("a");
  a.href = gh;
  a.download = "meme.png";

  a.click();
}
