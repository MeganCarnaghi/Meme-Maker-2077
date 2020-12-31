module.exports = function(sequelize, DataTypes){
    var Meme = sequelize.define("Meme", {
        userInput : {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Meme;
}