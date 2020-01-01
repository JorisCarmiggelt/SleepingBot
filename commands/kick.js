const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  
var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(args[0]));

if(!kickUser) return message.channel.send("Gebruiker niet gevonden.")

var reason = args.join(" ").slice(22);

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij hebt hier niet de juiste permissies voor.");

if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet kicken.");

var kick = new discord.RichEmbed()
.setDescription("Kick")
.setColor("#ee0000")
.addField("Kicked gebruiker", kickUser)
.addField("Gekicked door", message.author)
.addField("Reden:", reason);

var kickChannel = message.guild.channels.find(`name`, "logs");
if(!kickChannel) return message.guild.send("Kan het kanaal niet vinden");

message.guild.member(kickUser).kick(reason);

kickChannel.send(kick);

return;

    

}

module.exports.help = {
    name: "kick"
}