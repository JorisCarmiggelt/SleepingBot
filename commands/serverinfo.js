const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Sleeping Designs server info.")
        .setColor("#edaf13")
        .setThumbnail(icon)
        .addField("Server eigenaar:", message.guild.owner)
        .addField("Je bent gejoined op:", message.member.joinedAt)
        .addField("Totaal aantal members", message.guild.memberCount);




    return message.channel.send(serverEmbed);

    

}

module.exports.help = {
    name: "serverinfo"
}