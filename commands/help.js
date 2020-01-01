const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Sleeping Designs bot** \n\n **Commands** \n\n **Geen permissie nodig** \n\n **!help** - Krijg alle help commands \n **!info** - Krijg informatie over de bot \n **!serverinfo** - Krijg alle informatie over de server \n **!ticket** - Maak hiermee een ticket. \n **!close** - Sluit hiermee een ticket. \n\n **Wel permissie nodig** \n **!ban** - Hiermee kan je iemand bannen \n **!kick** - Hiermee kan je iemand kicken \n **!clear <aantal berichten>** - Ruim de chat op! \n **!warn <gebruiker> <reden>** - Waarschuw een gebruiker. \n **!tempmute <gebruiker> <tijd>** - Hiermee kan je iemand tempmuten. \n **!say <bericht> <kanaal zonder # ervoor>** - Laat de bot een bericht versturen.";

        message.author.send(text);

        message.channel.send("Alle commands staan in je privéberichten!")

    } catch (error) {
        message.channel.send("Er iets iets fout gegaan");
    }





}

module.exports.help = {
    name: "help"
}