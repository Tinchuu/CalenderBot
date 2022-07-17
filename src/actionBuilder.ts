import DiscordJS, { CommandInteraction } from 'discord.js'
import { clientAction } from './commands/clientAction'
import { pain } from './commands/pain'
import { set } from './commands/set'
import { currentTime } from './commands/currentTime'

export class actionBuilder {
    private action: clientAction

    constructor(interaction:CommandInteraction) {
        switch(interaction.commandName) {
            case "pain":
                this.action = new pain(interaction)
                break

            case "set":
                this.action = new set(interaction)
                break

            case "current_time":
                this.action = new currentTime(interaction)
                break

            default:
                this.action = new set(interaction)
        }
    }

    public output() {
        this.action.action()
    }
}