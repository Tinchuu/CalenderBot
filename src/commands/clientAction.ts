import { CommandInteraction, DiscordAPIError, MessageEmbed } from "discord.js";

export abstract class clientAction {
    private interact: CommandInteraction;

    constructor(interact:CommandInteraction) {
        this.interact =  interact
    }

    public getInteract() {
        return this.interact
    }

    public action() {
    }

}


