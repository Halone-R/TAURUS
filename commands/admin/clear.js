const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("🗑️ Delete a specified number of messages from a channel.")
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("The number of messages to delete (up to 100).")
        .setRequired(true)
    ),
  execute: async ({ client, interaction }) => {
    if (
      !interaction.member ||
      !interaction.member.permissions.has("MANAGE_MESSAGES")
    ) {
      return interaction.reply({
        content: "You do not have permission to use this command!",
        ephemeral: true,
      });
    }

    const amount = interaction.options.getInteger("amount");

    if (isNaN(amount)) {
      return interaction.reply({
        content: "Please enter a valid number!",
        ephemeral: true,
      });
    }

    if (amount <= 0 || amount > 100) {
      return interaction.reply({
        content: "Please enter a number between 1 and 100!",
        ephemeral: true,
      });
    }

    interaction.channel
      .bulkDelete(amount, true)
      .then((deletedMessages) => {
        interaction.reply({
          content: `Deleted ${deletedMessages.size} messages!`,
          ephemeral: true,
        });
      })
      .catch((error) => {
        console.error("Error deleting messages:", error);
        interaction.reply({
          content: "Error deleting messages!",
          ephemeral: true,
        });
      });
  },
};
// TODO: study the code and update the code