module.exports = function(sequelize, DataTypes) {
    var Meme = sequelize.define("Meme", {
        //grabbing the user input text
        text: DataTypes.STRING,
        //image url through cloudify
        image: DataTypes.STRING
    });
    return Meme;
};