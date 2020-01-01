const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "661890288318545951";

    if (message.channel.parentID === categoryID) {

        message.channel.delete();
    } else {
        message.channel.send("Dit command is alleen te gebruiken in een ticket!");
    }

}

module.exports.help = {
    name: "close"

};