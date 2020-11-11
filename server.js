const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`https://probotfake.glitch.me`);
}, 280000);

const { Attachment, Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const talkedRecently = new Set();
const client = new Client({ disableEveryone: true });
const { exec } = require("child_process");
const canvas = require("canvas");
const { get } = require("request-promise-native");
const dat = {};
const Canvas = require("canvas");
const botversion = require("./package.json").version;
const moment = require("moment");
var request = require("request");
const fs = require("fs");
var figlet = require("figlet");
const util = require("util");
const ms = require("ms");
var sec = require("sec");
const jimp = require("jimp");
const guild = require("guild");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms");
var table = require("table").table;
const Discord = require("discord.js");
const fetch = require("node-fetch");
const data = {};
client.login("TOKEN");
var Datie = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
  timeZoneName: "short",
  weekday: "short",
  month: "long",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
client.on("ready", function() {
  client.user.setStatus("Idle");
  client.user.setGame("1!help");
});
//// cod unbanall\\\\\
client.on('message',async message => {
  if(message.content === '1!unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don t have ADMINSTATORT ');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`Server : ${guild.name}
  **Everyone was unbanned by** : <@${message.author.id}>`) 
  });
  });
  }
  });
//////welcome\\\\\\
client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "┃✨┃welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(
      ":bust_in_silhouette: | Welcome!",
      `__**بــەخــێــربــێــی بــۆ ســێــرڤــەربــە هــیــوای کــاتــێــکــی خــۆش, ${member}**__`
    )
    .addField("```:◈━━━━━━━━❮◈❯━━━━━━━━◈:```")  
    .addField("__**:id: | ئــەکــاونــتــت :**__", "**[" + `${member.id}` + "]**")
    .addField("__**:family_mwgb: | تــۆ کــەســی ژمــارە : **__ ", `${member.guild.memberCount}`)
    .addField("__**📍 | نــاوی مــیــمــبــەر:**__", `<@` + `${member.id}` + `>`, true)
    .addField("__**🔰 | نــاوی ســێــرڤــەر : **__", `${member.guild.name}`, true)
    .setImage(
      "https://media.discordapp.net/attachments/678300317745414165/679375773832052737/image0.gif"
    )
    .setTimestamp();

  channel.sendEmbed(embed);
});
//////left\\\\\\
client.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find("name", "┃✨┃left");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField("نــاو:", `${member}`)
    .addField("رۆیــشــت لــە ســێــرڤــەر", ";(")
    .addField(
      "ســێــرڤــەر مــاوە",
      `${member.guild.memberCount}` + " مــێــمــبــەر"
    )
 });

////invite\\\\


/////////profile\\\\\\\\
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
///////open or close\\\\\\\\
client.on('message', message => {
         if(message.content === prefix + "lock") {
                             if(!message.channel.guild) return message.reply(' This command only for servers');
 
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ببورە ئەم رۆلەت نیە');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
 
                }).then(() => {
                    message.reply("بە سەرکەوتوی قفل بوو")
                });
                  }
      if(message.content === prefix + "unlock") {
                          if(!message.channel.guild) return message.reply(' This command only for servers');
 
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ببورە ئەم رۆلەت نیە');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
 
                }).then(() => {
                    message.reply("بە سەرکەوتوی کرایەوە")
                });
      }
 
})
///////mewt or unmewt \\\\\\
client.on("message", message => {
if(message.content.startsWith(prefix + "mute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}mute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});
///////anti everyone\\\\\\\
client.on('message', async message => {
            if(message.content.includes('@everyone')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Type everyone**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` تۆ میوتکرای بەھۆی لێدانی ئێڤریوەن`');
 
 
    }
})
////clear\\\\
client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: sarkawtoo nabw **');        
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**sarkawtoo nabw**');
          var msg;
          msg = parseInt();
 
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``سڕایەوە ``",
          color: 0x06DF00,
          footer: {
 
          }
        }}).then(msg => {msg.delete(3000)});
                            }
 
 
  });

//private krdni channel
client.on('message', fantic => {
if (fantic.content === "1!private") {
if (!fantic.member.hasPermission("ADMINISTRATOR")) return fantic.react(":x:")
fantic.channel.overwritePermissions(fantic.guild.id, {
VIEW_CHANNEL: false
});
fantic.react("🔒")
}
});


//public krdni channel
client.on('message', fantic => {
if (fantic.content === "1!public") {
if (!fantic.member.hasPermission("ADMINISTRATOR")) return fantic.react(":x:")
fantic.channel.overwritePermissions(fantic.guild.id, {
VIEW_CHANNEL: true
});
fantic.react("🔓")
}
});

//////voice \\\\\\
client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply('**kra. ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- bcho zhwrekawa !**');
    }
  }
});
/////band or ban  \\\\\
client.on('message', message => {
    if(message.content.startsWith(`1!ban`)) {
        if(message.member.hasPermission("BAN_MEMBERS")) {
     let member = message.mentions.members.first();
     if(member) {
         member.ban('Optional reason for the audit logs').then(() => {
             message.channel.send(`Successfully banned ${member}`);
           }).catch(err => {
             message.channel.send('I was unable to ban the user. Please check my permmisions.');
             console.error(err);
           });
     } else {
         message.channel.send("You need to mention a user!")
     }
 }
    }
 });
client.on('message', message => {
   if(message.content.startsWith(`1!kick`)) {
       if(message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first();
    if(member) {
        member.kick('Optional reason for the audit logs').then(() => {
            message.channel.send(`Successfully kicked ${member}`);
          }).catch(err => {
            message.channel.send('I was unable to kick the user. Please check my permmisions.');
            console.error(err);
          });
    } else {
        message.channel.send("You need to mention a user!")
    }
}
   }
});
 ////server js\\\\

client.on("message", message => {
if (message.content === "1!help") {
const embed = new Discord.RichEmbed().setColor("RONDOM")
.setDescription(`**زانیاری بۆتکە** ")

Admin Commands 🔻
> 1!lock        بۆ قفل کردنی جنال
> 1!unlock      بۆ کردنەوەی جەنال
> 1!mute        بۆ میوت کردنی کەسئک 
> 1!unmute      بۆ لابردنی میوتی کەسئک 
> 1!kick        بۆ کیک کردنی کەسیک
> 1!ban         بۆ بان کردنی کەسیک
> 1!private     بۆ پراڤت کردنە جه نال 
> 1!public      بۆ لا بردنە پرایڤت 
> 1!join        بۆ جۆین کردنی ڤۆیس 
> 1!mall        بۆ موڤ کردنی هەموو ئەوانەی فۆیس 
> 1!unbanall    بۆ لابردنی هەموو باندەکان 


Public Commands 🔻


> 1!invite
> 1!server 
> 1!about

Others 🔻




**•KAK LAHURE OR KAK 3AZA**`);
message.author.sendEmbed(embed);
  message.reply(`Sending you a DM with information.**__
`)
  message.react('✅')



}
});
 
/////plhing\\\\\
client.on("ready", () => {
  function randomStatus() {
    let status = ["1!help", "KAK LAHURE","KAK 3AZA" ,]; //lera nawakan bnusa
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus], {
      type: "PLAYING",
      url: "https://twitch.tv/TALABANI"
    });
  }
  setInterval(randomStatus, 7000);
});
//////ANTI REKLAM\\\\\\

client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` تۆ میوتکرای بەھۆی دانانی سێرڤەر `');
 
 
    }
})
/////SEND_MESSAGES



client.on("message", message => {
if (message.content.startsWith("1!mall")) {
if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
return message.reply("```ببورە رۆڵەکەی تۆ ناتوانێ ئەم فرمانە ئەنجام بدات```")
if (message.member.voiceChannel == null)
return message.channel.send(
'```بڕۆ فۆیسێک دوبارە فرمانەکە بنوسە```'
);
let ToOFaN
var author = message.member.voiceChannelID;
var m = message.guild.members.filter(m => m.voiceChannel);
message.guild.members
.filter(m => m.voiceChannel)
.forEach(m => {
m.setVoiceChannel(author);
}); message.channel.send("هەموو ئەو کەسانەی لە فۆیس بوون موڤ کرانە لای خۆت"
);
}
});



client.on("message", message => {
if (message.content.split(" ")[0].toLowerCase() === "1!clear") {
const word = message.content;
const number = word.slice(7, word.length);
const int = Number(number);
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
return message.channel.send(
"تۆ ناتوانیت ئەم فرمانە ئەنجەم بدەیت `MANAGE_MESSAGE`چونکە ڕۆڵەکەی تۆ ئەمەی پێ نیە "
);
}581993882368213002
if (int >= 101) {
return message.channel.send(
"بۆتەکە توانایی نیەلە 100چات زیاتر بسڕێتەوە"
);
}
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
return message.channel.send(
"ناتوانى "
);
}
if (int == "1000") {

return message.channel.send("supply A Number to Delete");
} else if (isNaN(int)) {
return message.reply("Number");
}
message.channel.bulkDelete(int).then(() => {
return message.channel
.send(`Cleared ${int} messages.`)
.then(m => m.delete(5000));
});
}
});

//////about\\\\\\By KAK LAHURE OR KAK 3AZA


client.on("message", message => {
if (message.content === "1!invite") {
if (!message.channel.guild)
return message.reply(
"Please Do not type bot commands in bot private chat"
);
let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle("__**=>بۆ ڕاکێشانی بۆتەکە کلیک بکە لەم تێکستە شینە<=**__")
.setImage("https://media1.tenor.com/images/54cc77830f82ef67471d8d868d09ad2f/tenor.gif?itemid=11230336")
.setURL("https://discord.com/api/oauth2/authorize?client_id=773930384479617046&permissions=8&scope=bot") // Type Your Link here after ''
.setFooter("By KAK LAHURE OR KAK 3AZA", message.author.avatarURL);
message.channel.sendEmbed(embed);
}
});



 


client.on("message", message => {
if (message.content === "1!about") {
const bot = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setColor("#00000")
.addField(
"**____خێرای خەتەکەت____**: ",
` ${Date.now() - message.createdTimestamp}` + "__ __ ",
true
)
.addField("**__سێرڤەرەکان__** : ", `→ ${client.guilds.size}`, true)
.addField("**__چەناڵەکەن__** : ", `→ ${client.channels.size} `, true)
.addField("**__میمبەرەکان__** : ", `→ ${client.users.size} `, true)
.addField("**__ناوی بۆتەکە__** : ", `→ ${client.user.tag} `, true)
.addField("__owner bot__",`→ @!        <𝐄/𝐖>  ᵏᵃᵏ 3𝐴𝑍𝐴#8833`,)
.addField("__co owner bot__",`→!            <𝐄/𝐖> ᵏᵃᵏ  𝐿𝒜𝐻𝒰𝑅📿#1213`,)
.setImage("")
.setFooter(message.author.username, message.authoer.avatarURL);
message.channel.send(bot);
}
});


client.login("NzczOTMwMzg0NDc5NjE3MDQ2.X6QY1g.osxLdTvjOBRM813N9bc5Eb1nEsw")
