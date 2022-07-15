import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
import { actionBuilder } from './actionBuilder';

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
client.on('ready', () => {
    console.log('ok')

    let commands = client.application?.commands

    commands?.create({
        name: "pain",
        description: "inflicts pain on the cat",
        options:[
            {
                name: "times",
                description: "amount of times to inflict pain",
                type: 4,
                required: false,
            }
        ],
    })
    commands?.create({
        name: "time",
        description: "get current time",
    })
    commands?.create({
        name: "set",
        description: "sets desired time",
        options: [
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
                        "value": 'January',
                    },
                    {
                        "name": 'February',
                        "value": 'February'
                    },
                    {
                        "name": 'March',
                        "value": 'March',
                    },
                    {
                        "name": 'April',
                        "value": 'April',
                    },
                    {
                        "name": 'May', 
                        "value": 'May', 
                    },
                    {
                        "name": 'June',
                        "value": 'June',
                    },
                    {
                        "name": 'July',
                        "value": 'July',
                    },
                    {
                        "name": 'March',
                        "value": 'March',
                    },
                    {
                        "name": 'August',
                        "value": 'August',
                    },
                    {
                        "name": 'September',
                        "value": 'September',
                    },
                    {
                        "name": 'October',
                        "value": 'October',
                    },
                    {
                        "name": 'November',
                        "value": 'November',
                    },
                    {
                        "name": 'December',
                        "value": 'December',
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

function timeDif(input:Date) {
    let dif = -1
    let dateTime = new Date()


    return dif
}



function cnvDate(input:string) {
    
    return ""
}


client.login(process.env.DISCORD_TOKEN)