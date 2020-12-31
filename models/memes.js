module.exports = function(sequelize, DataTypes) {
    var Meme = sequelize.define("Meme", {
        //grabbing the user input text
        userInput: DataTypes.STRING,
        allowNull: true
    },
    {
        //image url through cloudify
        imageName: DataTypes.STRING,
        allowNull: false
    });
    return Meme;
};