import { MessageEmbed } from "discord.js"
import { embedBuilder } from "./embedBuilder"

export class embedResult extends embedBuilder {

    constructor(title:string, description:string) {
        super()
        this.getEmbed()
        .setTitle(title)
        .setDescription(description)
    }

    public addField() {
        this.getEmbed()['fields'].push()
    }
}