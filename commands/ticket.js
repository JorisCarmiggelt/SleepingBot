const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "661890288318545951";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name === userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket aangemaakt.");

            bool = true;
        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi " + message.author.username)
        .setFooter("Je ticket word aangemaakt.");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "tekst").then((createdChan) => {

    
        createdChan.setParent(categoryID).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });

            settedParent.overwritePermissions(message.guild.roles.find('name', "🛠 | Moderator"), { "READ_MESSAGES": true, "SEND_MESSAGES": true });

            settedParent.overwritePermissions(message.guild.roles.find('name', "🎨 | Designer"), { "READ_MESSAGES": true, "SEND_MESSAGES": true });
            
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTAND_INVITE": false, "ADD_REACTIONS": true
            });

            var embedPerrent = new discord.RichEmbed()
                .setTitle("Hoi " + message.author.username.toString())
                .setDescription("Stel hier je vraag!");

            settedParent.send(embedPerrent);

        }).catch(err => {
            message.channel.send("Er is iets fout gegaan!");
        });

    })

};

module.exports.help = {
    name: "ticket"
};