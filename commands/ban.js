const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(args[0]));

    if(!banUser) return message.channel.send("Gebruiker niet gevonden.")
    
    var reason = args.join(" ").slice(22);
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij hebt hier niet de juiste permissies voor.");
    
    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet bannen.");
    
    var ban = new discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ee0000")
    .addField("banned gebruiker", banUser)
    .addField("Gebanned door", message.author)
    .addField("Reden:", reason);
    
    var banChannel = message.guild.channels.find(`name`, "logs");
    if(!banChannel) return message.guild.send("Kan het kanaal niet vinden");
    
    message.guild.member(banUser).ban(reason);
    
    banChannel.send(ban);
    
    return;


    

}

module.exports.help = {
    name: "ban"
}