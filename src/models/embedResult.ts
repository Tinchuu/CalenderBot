import { MessageEmbed } from "discord.js"
import { embedBuilder } from "./embedBuilder"

export class embedResult extends embedBuilder {

    constructor(title:string, description:string) {
        super()
        this.getEmbed()
        .setTitle(title)
        .setDescription(description)
    }

    public addField(title:string, remainingTime:number) {
        this.getEmbed()['fields'].push(
            {
                name: title,
                value: "<t:" + remainingTime + ":F>",
                inline: false
            },
        )
    }
}