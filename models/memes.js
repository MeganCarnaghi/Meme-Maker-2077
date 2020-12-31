module.exports = function(sequelize, DataTypes) {
    var Meme = sequelize.define("Meme", {
        //grabbing the user input text
        text: DataTypes.STRING,
        allowNull: true
    },
    {
        //image url through cloudify
        image: DataTypes.STRING,
        allowNull: false
    });
    return Meme;
};