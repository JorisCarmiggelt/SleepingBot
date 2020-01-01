const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.has("661321824877019147")) return message.channel.send("Jij kan dit niet doen!");
    
    const aantalSterren = args[0];

    if(!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Geef een aantal sterren op tussen de 1 en de 5!");

    const bericht = args.splice(1, args.length).join(' ') || 'Geen bericht meegegeven!';

    var reviewChannel = message.guild.channels.find("name", "『⭐』reviews");
    if(!reviewChannel) return message.channel.send("Kanaal niet gevonden");

    var sterren = "";

    for (var i = 0; i < aantalSterren; i++) {
        sterren += ":star: ";
    }



    message.delete();

    const review = new discord.RichEmbed()
    .setTitle(`${message.author.username} heeft een review geschreven.`)
    .addField("Sterren: ", `${sterren}`)
    .addField("Review: ", `${bericht}`);

    message.channel.send(":white_check_mark: Je review is geschreven!");
    return reviewChannel.send(review);


}

module.exports.help = {
    name: "review"

};