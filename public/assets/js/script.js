$(function () {
  $(".meme-it").on("click", function () {
    console.log("clicked");

    //Scroll to the meme generator div
    $("html, body").animate(
      {
        scrollTop: $("#meme-generator").offset().top,
      },
      100
    );

    $("#choice").text($(this).attr("data-img"));
    console.log($(this).attr("data-img"));
  });

  $("#generate-btn-1").on("click", function (event) {
    event.preventDefault();
    const newMeme = {
      //takes meme text from client, text box
      userInput: $("#bottom2").val().trim(),
      // autofill /tag for user with the img input for the image chosen.
      imageName: $("#choice").val().trim(),
    };
    // alert("Clicked");
    $.post("/api/memes", newMeme, (data) => {});
  });
});
