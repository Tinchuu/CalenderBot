import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import { actionBuilder } from './actionBuilder';
import mongoose from 'mongoose'

/*
    Need user to input due date, and event
    Need to be able to interpret the date that is input
    Need to be able to store the date that is inputted

    Remind users of due dates daily, or whenever requested
    Users can input due dates into the bot
*/


const { Formatters } = require('discord.js')
// Allow for the use of .env files
dotenv.config()

// Creation of a new client
const client = new DiscordJS.Client({
    intents: [
        // You must specify what the client intends to use
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

// Message to send when client is logged in
client.on('ready', async () => {
    await mongoose.connect(
        process.env.MONGOOSE || '',
        {
            keepAlive: true
        }
    ).then(()=>{
        console.log("connected")

    }).catch((err)=>{
        console.log(err)
    })
    
    console.log('ok')

    let commands = client.application?.commands

    commands?.create({
        name: "pain",
        description: "inflicts pain on the cat",
        options:
        [
            {
                name: "times",
                description: "amount of times to inflict pain",
                type: 4,
                required: false,
            }
        ],
    })
    commands?.create({
        name: "current_time",
        description: "get current time",
    })
    commands?.create({
        name: "set",
        description: "sets desired time",
        options: 
        [
            {
                name: "day",
                description: "day of time to count to",
                type: 4,
                required: true,
            },
            {
                name: "month",
                description: "month input",
                type: 3,
                required: true,
                choices: [
                    {
                        "name": 'January',
                        "value": '0',
                    },
                    {
                        "name": 'February',
                        "value": '1'
                    },
                    {
                        "name": 'March',
                        "value": '2',
                    },
                    {
                        "name": 'April',
                        "value": '3',
                    },
                    {
                        "name": 'May', 
                        "value": '4', 
                    },
                    {
                        "name": 'June',
                        "value": '5',
                    },
                    {
                        "name": 'July',
                        "value": '6',
                    },
                    {
                        "name": 'August',
                        "value": '7',
                    },
                    {
                        "name": 'September',
                        "value": '8',
                    },
                    {
                        "name": 'October',
                        "value": '9',
                    },
                    {
                        "name": 'November',
                        "value": '10',
                    },
                    {
                        "name": 'December',
                        "value": '11',
                    }
                ]
            },
            {
                name: "year",
                description: "day of time to count to",
                type: 4,
                required: true,
            },
        ]
    })

})


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    let action = new actionBuilder(interaction);

    action.output()
})


// Client's reaction to a message
client.on('messageCreate', (message) => {
    if (message.content == "d") {
        message.reply({
            content: Formatters.codeBlock(),
        })
    }
})


client.login(process.env.DISCORD_TOKEN)