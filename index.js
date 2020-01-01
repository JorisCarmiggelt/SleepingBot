const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lenght < -0) {
        console.log("Geen files gevonden!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        bot.commands.set(fileGet.help.name, fileGet);


    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("SleepingDesigns", { type: "WATCHING" })

});

bot.on("guildMemberAdd", member => {


var role = member.guild.roles.find("name", "👤 | Bezoeker");

if(!role) return;

member.addRole(role);

const channel = member.guild.channels.find("name", "『👋』welkom");

if (!channel) return;

channel.send(`Welkom op Sleeping Designs, ${member}.`);


});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return message.channel.send("Gelieve dit alleen in de server te doen!");

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var command = messageArray[0];

    var arguments = messageArray.slice(1);



    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);

    //  if (command === `${prefix}ping`) {

    //   return message.channel.send("Pong!");

    // }

    // if (command === `${prefix}info`) {

    /// var botIcon = bot.user.displayAvatarURL;

    // var botEmbed = new discord.RichEmbed()
    // .setDescription("Sleeping Designs bot info.")
    // .setColor("#edaf13")
    // .addField("Bot naam:", bot.user.username)
    // .setThumbnail(botIcon)
    // .addField("Gemaakt op", bot.user.createdAt);



    //return message.channel.send(botEmbed);

    // }

    // if (command === `${prefix}serverinfo`) {

    // var icon = message.guild.iconURL;

    //  var serverEmbed = new discord.RichEmbed()
    //   .setDescription("Sleeping Designs server info.")
    //   .setColor("#edaf13")
    // .setThumbnail(icon)
    // .addField("Server eigenaar:", message.guild.owner)
    // .addField("Je bent gejoined op:", message.member.joinedAt)
    //  .addField("Totaal aantal members", message.guild.memberCount);




    //return message.channel.send(serverEmbed);

    // }


});


bot.login(process.env.token);