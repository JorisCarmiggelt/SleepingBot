const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, jij kan dit niet doen!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een bestaand persoon op!");

   if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, dit persoon kan jij niet warnen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op!");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {

        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
            .setDescription("Warn")
            .setColor("#ffa200")
            .addField("Warned persoon:", user)
            .addField("Warned door:", message.author)
            .addField("Aantal warns:", warns[user.id].warns)
            .addField("Reden:", reason);

        var warnChannel = message.guild.channels.find(`name`, "logs");
        if (!warnChannel) return console.log(`Kan het kanaal niet vinden`);

        warnChannel.send(warnEmbed);

        
        
        if(warns[user.id].warns === 3) {
            var warnBericht = new discord.RichEmbed()
            .setDescription("**Pas op** " + user)
            .setColor("#ffa200")
            .addField("Bericht:", "**Nog 1 warn en je hebt een ban!**");

            message.channel.send(warnBericht);

        } else if(warns[user.id].warns === 4) {

            message.guild.member(user).ban(reason);
            message.channel.send(`${user}** is verbannen!**`)
        }

        



}

module.exports.help = {
    name: "warn"
};