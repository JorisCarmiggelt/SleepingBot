const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij mag dit niet doen!");

    var splitser = "//";

    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Gebruik:")
            .setColor("#00ee00")
            .setDescription(`!say <bericht> ${splitser} <kanaal>.`);

        return message.channel.send(useMessage);

    }

    args = args.join(" ").split(splitser);

    
    if (args[1] == undefined) args[3] = "『📌』mededelingen";

    var options = {

        
        bericht: args[0] || "Geen inhoud opgegeven",
        kanaal: args[1].trim()

    }

    var sayer = message.author;

    var say = new discord.RichEmbed()
        .setTitle("Bericht:")
        .setDescription(`Bericht van: ${sayer} \n\n ${options.bericht} \n`)
        .setTimestamp();

    var sayKanaal = message.guild.channels.find(`name`, options.kanaal);
    if (!sayKanaal) return message.channel.send("Kan het kanaal niet vinden.");

sayKanaal.send(say);



}

module.exports.help = {
    name: "say"
}