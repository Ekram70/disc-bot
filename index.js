require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // For guild-related events
    GatewayIntentBits.GuildMessages, // For message-related events
    GatewayIntentBits.MessageContent, // Privileged intent
  ],
  partials: [Partials.Message],
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
