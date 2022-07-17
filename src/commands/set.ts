import { Formatters } from "discord.js";
import { clientAction } from "../clientAction";

export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()

        const day = interact.options.getInteger("day")
        const month = interact.options.getString("month")
        const year = interact.options.getInteger("year")

        const inputDate = new Date(Number(year), Number(month), Number(day))
        const now = Math.floor(Date.now() / 1000)
        const unix = Math.floor(inputDate.getTime() / 1000)

        const hah = this.createEmbed("interesting topic ENGGEn 204 aiusefhgiasuefh", "FF0000", now, unix)
        

        interact.reply({
            content: "<t:" + unix + ":F>," + String(month),
            embeds: [hah],
        })
    }
}

