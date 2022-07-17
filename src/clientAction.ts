import { ColorResolvable, CommandInteraction, DiscordAPIError, MessageEmbed } from "discord.js";

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

    public createEmbed(title:string, colour:string, start:number, end:number, description:string) {
        const embed = new MessageEmbed()
        .setColor(`#${colour}`)
        .setTitle(title)
        .addFields(
            {
                name: "Start",
                value: "Started at: <t:" + start + ":F>"
            },
            {
                name: "Due",
                value: "Due at: <t:" + end + ":F>"
            },
            {
                name: "Time Elapsed",
                value: this.formatUnix(this.timeDif(start, end))
            },
            {
                name: "Weight",
                value: "Worth: "
            }
        )
        .setDescription(description)

        return embed
    }

    public timeDif(start:number, end:number) {
        return end - start
    }
    
    public formatUnix(input:number) {
        let output = ""
        let footer = ""
    
        if (input < 0) {
            footer = "Ago"
            input = Math.abs(input)
        } else {
            footer = "in the Future"
        }
    
        let weeks = Math.floor(input / 604800)
        output += weeks.toFixed()+ " Weeks "
    
        let days = Math.floor(input / 86400) % 7
        output += days.toFixed() + " Days "
    
        let hrs = Math.floor(input / 3600) % 24
        output += hrs.toFixed() + " Hours "
    
        let mins = Math.floor(input / 60) % 60
        output += mins.toFixed() + " Minutes "
    
        output += footer
    
        return output
    }
}


