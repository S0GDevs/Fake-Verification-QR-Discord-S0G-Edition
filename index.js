const { EmbedBuilder } = require('discord.js');

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (message.content === prefix + "sommaire"){
        const e = new EmbedBuilder()
            .setColor('#00FF00')
            .addFields({ name: `mets sque tu veux`, value: `mets sque tu veux` })
            .setFooter({ text: client.user.username, iconURL: interaction.guild.members.cache.get(client.user.id).displayAvatarURL({ dynamic: true }) })
            .setTimestamp(new Date()) 
        return message.channel.send({ embeds: [e] })
    }
})