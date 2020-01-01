const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("Sleeping Designs bot info.")
        .setColor("#edaf13")
        .addField("Bot naam:", bot.user.username)
        .setThumbnail(botIcon)
        .addField("Gemaakt op", bot.user.createdAt);



    return message.channel.send(botEmbed);

}

    



module.exports.help = {
    name: "info"
}