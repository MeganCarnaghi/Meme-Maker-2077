$(function(){

$(".meme-it").on("click", function () {
console.log('clicked');
$("#choice").text($(this).attr("data-img"))
console.log($(this).attr("data-img"));
});

$("#generate-btn-1").on("click", function () {
    const newMeme = {
        //takes meme text from client, text box
        userInput: $("#bottom").val().trim(),
        // autofill /tag for user with the img input for the image chosen.
        imageName: $("#choice").val().trim(),
    };
    alert("Clicked");
    $.post("/api/memes", newMeme, (data) => {});
})
/*const newMeme = {
//takes meme text from client, text box
userInput: " ",
// autofill /tag for user with the img input for the image chosen.
imageName: $(this).attr("data-img"),
};
alert("Clicked");
$.post("/api/memes", newMeme, (data) => {});*/
});