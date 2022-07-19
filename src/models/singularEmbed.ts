import { MessageEmbed } from "discord.js"
import { embedBuilder } from "./embedBuilder"

export class singularEmbed extends embedBuilder {

    constructor(title:string, colour:string, start:number, end:number, description:string) {
        super()
        this.getEmbed()
        .setColor(`#${colour}`)
        .setTitle(title)
        .addFields(
            {
                name: "Start",
                value: "Start Date: <t:" + start + ":F>"
            },
            {
                name: "Due",
                value: "Due Date: <t:" + end + ":F>"
            },
            {
                name: "Time Left",
                value: this.formatUnix(this.timeDif(end))
            }
        )
        .setDescription(description)
    }
}