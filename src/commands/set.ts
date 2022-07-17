import { Formatters } from "discord.js";
import { clientAction } from "../clientAction";

export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()

        const inputDate = new Date()

        const day = interact.options.getInteger("day")
        const month = interact.options.getString("month")
        const year = interact.options.getInteger("year")
        const hour = interact.options.getInteger("hour")
        const minute = interact.options.getInteger("minute")

        if (day) 
            inputDate.setDate(day)
        
        if (month)
            inputDate.setMonth(Number(month))

        if (year)
            inputDate.setFullYear(year)

        if (hour)
            inputDate.setHours(hour)
        
        if (minute)
            inputDate.setMinutes(minute)


        const now = Math.floor(Date.now() / 1000)
        const unix = Math.floor(inputDate.getTime() / 1000)

        const hah = this.createEmbed("OK", "FF0000", now, unix, "yes")
        

        interact.reply({
            content: "<t:" + unix + ":F>,",
            embeds: [hah],
        })
    }
}

