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
    let days:number[] = []
    for (let i = 1; i < 32; i++) {
        days[i] = i
    }

    
    
    console.log('ok')

    let commands = client.application?.commands

    commands?.create({
        name: "remind",
        description: "reminds",
        options:
        [
            {
                name: "course",
                description: "pain",
                type: 3,
                required: false,
            }
        ],
    })
    commands?.create({
        name: "pain",
        description: "inflicts pain",
        options:
        [
            {
                name: "course",
                description: "pain",
                type: 3,
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
                name: "end_day",
                description: "day of the end of the deadline",
                type: 4,
                required: true,
            },
            {
                name: "end_month",
                description: "month of the end of the deadline",
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
                name: "title",
                description: "title of the task that is due",
                type: 3,
                required: true,
            },
            {
                name: "topic",
                description: "topic of the course - please enter in the proper course ID, e.g. 'ENGGEN 204'",
                type: 3,
                required: true,
            },
            {
                name: "start_day",
                description: "Day of the start of task",
                type: 4,
                required: false,
            },
            {
                name: "start_month",
                description: "Month of the start of task",
                type: 3,
                required: false,
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
                name: "end_year",
                description: "End year of due date",
                type: 4,
                required: false,
            },
            {
                name: "end_hour",
                description: "End hour of due date",
                type: 4,
                required: false,
            },
            {
                name: "end_minute",
                description: "End minute of due date",
                type: 4,
                required: false,
            },
            {
                name: "description",
                description: "Description of the task due",
                type: 3,
                required: false,
            },
            {
                name: "start_year",
                description: "Year start of the task",
                type: 4,
                required: false,
            },
            {
                name: "start_hour",
                description: "Hour start of the task",
                type: 4,
                required: false,
            },
            {
                name: "start_minute",
                description: "Minutes start of the task",
                type: 4,
                required: false,
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