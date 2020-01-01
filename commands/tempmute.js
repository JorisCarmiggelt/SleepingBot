const ms = require("ms")
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, jij kan dit niet doen!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een bestaand persoon op!");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, dit persoon kan jij niet muten!");

    var muteRole = message.guild.roles.find("name", "muted");

    if (!muteRole) console.log("De role is niet gevonden!");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Geef een tijd op!");

    await (user.addRole(muteRole.id));

    message.channel.send(`${user} is gemuted voor ${muteTime}`);

    setTimeout(function () {

        user.removeRole(muteRole.id);

        message.channel.send(`${user} is geunmuted`);



    }, ms(muteTime));



}

module.exports.help = {
    name: "tempmute"
};