const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

const guilds = require("../../../schemas/GuildSchema");
const { embedCreate } = require("../../../functions");

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("build-embed")
    .setDescription("Builds an embed (could be used for leveling)")
    .addSubcommand((sub) =>
      sub
        .setName("create")
        .setDescription("Creates an embed")
        .addStringOption((sexy) =>
          sexy
            .setName("name")
            .setDescription("Embed name to be saved on database")
            .setRequired(true)
        )
    )
    .addSubcommand((racistguy) =>
      racistguy
        .setName("delete")
        .setDescription("Deletes a created embed from the database")
        .addStringOption((black) =>
          black
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setAutocomplete(true)
            .setRequired(true)
        )
    )
    .addSubcommand((imsotiredbro) =>
      imsotiredbro
        .setName("edit_author")
        .setDescription("Edits an author field")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((st) =>
          st
            .setName("text")
            .setDescription("Enter your desired text for the author field")
            .setMaxLength(256)
        )
        .addAttachmentOption((banke) =>
          banke
            .setName("icon")
            .setDescription(
              "Input your desired image for the icon next to the author text"
            )
        )
        .addStringOption((lf) =>
          lf
            .setName("link")
            .setDescription(
              "Enter your desired url to turn author into a hyperlink"
            )
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_color")
        .setDescription("Edit a created embed's color")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((fsjkjdkl) =>
          fsjkjdkl
            .setName("color")
            .setDescription("Enter your desired color - HEX code only")
            .setRequired(true)
            .setMaxLength(7)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_description")
        .setDescription("Edit a created embed's description")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("description")
            .setDescription("Enter your desired description - 4096 max")
            .setRequired(true)
            .setMaxLength(4096)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_footer")
        .setDescription("Edit a created embed's footer")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("text")
            .setDescription("Enter your desired footer text - 2048 max")
            .setRequired(true)
            .setMaxLength(2048)
        )
        .addAttachmentOption((banke) =>
          banke
            .setName("icon")
            .setDescription(
              "Input your desired image for the icon next to the footer text"
            )
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("link")
            .setDescription("Enter your desired image link")
            .setMaxLength(2048)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_image")
        .setDescription("Edit a created embed's image")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addAttachmentOption((banke) =>
          banke.setName("icon").setDescription("Input your desired image")
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("link")
            .setDescription("Enter your desired link text")
            .setMaxLength(2048)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_thumbnail")
        .setDescription("Edit a created embed's thumbnail")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addAttachmentOption((banke) =>
          banke.setName("icon").setDescription("Input your desired image")
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("link")
            .setDescription("Enter your desired link text")
            .setMaxLength(2048)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_timestamp")
        .setDescription("Edit a created embed's timestamp")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addBooleanOption((fsjkjdk) =>
          fsjkjdk
            .setName("timestamp")
            .setDescription("Enter your desired option")
            .setRequired(true)
        )
    )
    .addSubcommand((colorererere) =>
      colorererere
        .setName("edit_title")
        .setDescription("Edit a created embed's title")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("description")
            .setDescription("Enter your desired title - 256 max")
            .setRequired(true)
            .setMaxLength(256)
        )
    )
    .addSubcommand((hf) =>
      hf.setName("list").setDescription("Lists of created embeds")
    )
    .addSubcommand((d) =>
      d
        .setName("show")
        .setDescription("Shows a generated embed")
        .addStringOption((fsjkjdk) =>
          fsjkjdk
            .setName("name")
            .setDescription("Named embed that was created using grenadier")
            .setRequired(true)
            .setAutocomplete(true)
        )
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  options: {
    cooldown: 15000,
  },
  /**
   * @param {ExtendedClient} client
   * @param {ChatInputCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    try {
      const { options } = interaction;
      const sub = options.getSubcommand(); // defines every sub commands
      const guild = await guilds.findOne({ guild: interaction.guild.id }); // finds if there's a saved guild id iside of the guildsscchema
      const name = options.getString("name"); // gets option name : string

      if (sub === "create") {
        // checks if the sub command is : create
        console.log('he selected create!')
        console.log(guild.embeds.find(
          (embed) =>
            embed.name ===
            name.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
              return g1.toUpperCase() + g2.toLowerCase();
            })
        ))
        if (
          !guild.embeds.find(
            (embed) =>
              embed.name ===
              name.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                return g1.toUpperCase() + g2.toLowerCase();
              })
          )
        ) {
          if (guild.embeds_count <= 10) {
            await guilds.findOneAndUpdate(
              {
                guild: interaction.guild.id,
              },
              {
                $push: {
                  embeds: {
                    name: name.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                      return g1.toUpperCase() + g2.toLowerCase();
                    }),
                    author: { name: undefined, iconURL: undefined },
                    color: undefined,
                    description: undefined,
                    footer: { text: undefined, iconURL: undefined },
                    image: undefined,
                    timestamp: undefined,
                    thumbnail: undefined,
                    title: undefined,
                  },
                },
                embeds_count: +1,
              }
            );

            return await client.successEmbed(
              client,
              interaction,
              `Embed saved to database with the name: ${name}`
            );
          } else if (guild.embeds_count >= 10) {
            return await client.errorEmbed(
              client,
              interaction,
              "Server has maximum embed of 10."
            );
          }
          return await client.errorEmbed(
            client,
            interaction,
            `Embed creation failed.\n**Reason**: The embed name: ${name} already exist`
          );
        } else {
          return await client.errorEmbed(
            client,
            interaction,
            `Embed creation failed.\n**Reason**: The embed name: ${name} already exist`
          );
        }
      }

      if (sub === "delete") {
        if (guild.embeds.find((embed) => embed.name === name)) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, name: name.toLowerCase() },
            {
              $pull: { embeds: { name } },
              embeds_count: -1,
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Deleted embed from the database with the name: ${name}`
          );
        }
        return await client.errorEmbed(
          client,
          interaction,
          `Embed deletion failed.\n**Reason:** Embed with the name: \`${name}\` does not exist`
        );
      }

      if (sub === "edit_author") {
        const text = interaction.options.getString("text");
        const icon = interaction.options.getAttachment("icon")
          ? interaction.options.getAttachment("icon").url
          : null;
        let link = interaction.options.getString("link");

        link = client.functions.match_regex("img", link) ? link : null;

        const data = {
          author: {},
        };

        if ((!text && !icon) || !link) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.author": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Author removed from database with the name: ${name}`
          );
        } else {
          if (text) data.author.name = text;

          if (icon || link) data.author.iconURL = icon || link;

          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.author": data.author,
              },
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Author updated to database with an embed name: ${name}`
          );
        }
      }

      if (sub === "edit_color") {
        let color = interaction.options.getString("color");

        color = client.functions.match_regex("color", color) ? color : null;
        if (!color) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.color": null,
              },
            }
          );
          await client.successEmbed(
            client,
            interaction,
            `Embed color resetted with the name: ${name}`
          );
        } else {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.color": resolveColor(color),
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Color updated for the embed with the name: ${name}`
          );
        }
      }

      if (sub === "edit_description") {
        const description = interaction.options.getString("description");

        if (!description) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.description": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Database removed description from an embed with the name: ${name}`
          );
        } else {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.description": description,
              },
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Description updated in the database with the name: ${name}`
          );
        }
      }

      if (sub === "edit_footer") {
        const text = interaction.options.getString("text");
        const icon = interaction.options.getAttachment("icon")
          ? interaction.options.getAttachment("icon").url
          : null;
        let link = interaction.options.getString("link");

        link = client.functions.match_regex("img", link) ? link : null;

        const data = {
          footer: {},
        };

        if ((!text && !icon) || !link) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.footer": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Title removed from the embed: ${name}`
          );
        } else {
          if (text) data.footer.text = text;

          if (icon || link) data.footer.iconURL = icon || link;
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.footer": data.footer,
              },
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Footer updated for the embed: ${name}`
          );
        }
      }

      if (sub === "edit_image") {
        const icon = interaction.options.getAttachment("attachment")
          ? interaction.options.getAttachment("attachment").url
          : null;

        let link = interaction.options.getString("link");

        link = client.functions.match_regex("img", link) ? link : null;
        let image;

        if (!icon || !link) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.image": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Image deleted from the database of embed with the name: ${name}`
          );
        } else {
          if (icon || link) image = icon || link;

          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.image": image,
              },
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Image updated for the embed with the name: ${name}`
          );
        }
      }

      if (sub === "edit_thumbnail") {
        const icon = interaction.options.getAttachment("attachment")
          ? interaction.options.getAttachment("attachment").url
          : null;

        let link = interaction.options.getString("link");

        link = client.functions.match_regex("img", link) ? link : null;
        let image;

        if (!icon || !link) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.thumbnail": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Thumbnail removed from database with the embed name: ${name}`
          );
        } else {
          if (icon || link) image = icon || link;

          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.thumbnail": image,
              },
            }
          );

          return await client.successEmbed(
            client,
            interaction,
            `Image updated for the embed: ${name}`
          );
        }
      }

      if (sub === "edit_timestamp") {
        const timestamp = interaction.options.getBoolean("timestamp");

        if (!timestamp) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.timestamp": false,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Timestamp removed from the embed: ${name}`
          );
        }

        await guilds.findOneAndUpdate(
          { guild: interaction.guild.id, "embeds.name": name },
          {
            $set: {
              "embeds.$.timestamp": timestamp,
            },
          }
        );

        return await client.successEmbed(
          client,
          interaction,
          `Timestamp edited for the embed: ${name}`
        );
      }

      if (sub === "edit_title") {
        const title = interaction.options.getString("title");

        if (!title) {
          await guilds.findOneAndUpdate(
            { guild: interaction.guild.id, "embeds.name": name },
            {
              $set: {
                "embeds.$.title": null,
              },
            }
          );
          return await client.successEmbed(
            client,
            interaction,
            `Title removed from the embed: ${name}`
          );
        }

        await guilds.findOneAndUpdate(
          { guild: interaction.guild.id, "embeds.name": name },
          {
            $set: {
              "embeds.$.title": title,
            },
          }
        );

        return await client.successEmbed(
          client,
          interaction,
          `Description edited for the embed: ${name}`
        );
      }

      if (sub === "list") {
        if (guild.embeds.length === 0 || guild.embeds_count == 0) {
          return await client.errorEmbed(
            client,
            interaction,
            "Embeds not available. Please add an Embed first."
          );
        }
        const dot = client.emoji("bunny_cs");
        const one = client.emoji("_1_HE");
        const two = client.emoji("_2_HE");
        const three = client.emoji("_3_HE");
        let data;

        data = guild.embeds.sort().map((value, i) => {
          const top10 = [];
          const pos = guild.embeds_count;

          const emojis = [`${one}`, `${two}`, `${three}`];
          top10.push(`**${emojis[i] || dot} #${pos})** ${value.name}`);

          return top10;
        });

        const embed = new EmbedBuilder()
          .setAuthor({
            name: "Server Embeds",
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setDescription(data.slice(0, 10).join("\n"))
          .setFooter({
            text: `List request by: ${interaction.member.displayName}`,
            iconURL: interaction.user.avatarURL({ dynamic: true }),
          })
          .setColor(client.color);
        return await interaction.editReply({ embeds: [embed] });
      }

      if (sub === "show") {
        const embed = guild.embeds.find((embed) => embed.name === name);

        if (!embed)
          return await client.errorEmbed(
            client,
            interaction,
            `Embed not found with the name: ${name}`
          );

        const embed_new = EmbedBuilder.from(embed);

        if (!embed.description)
          return await client.errorEmbed(
            client,
            interaction,
            "Embed must have a description. Please add one."
          );

        await interaction.editReply({ embeds: [embed_new] });
      }
    } catch (err) {
      console.error(err);
    }
  },
};
