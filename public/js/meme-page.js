$("meme-it").on("click", function() {
    e.preventDefault();
    $.get("/api/memes/" + id, (data) => {
        img.val(data.img);
    })
});