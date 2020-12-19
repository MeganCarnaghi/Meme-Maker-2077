module.exports = function(sequelize, DataTypes) {
    var Memes = sequelize.define("memes", {
        //grabbing the user input text
        text: DataTypes.STRING,
        //image url through cloudify
        image: DataTypes.STRING
    })
    return Memes;
};