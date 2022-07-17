import { Formatters } from "discord.js";
import { clientAction } from "./clientAction";
import { newEmbed } from "../models/embedBuilder";

export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()
        const extract = this.getInteract().options

        const startDate = new Date()
        const endDate = new Date()

        const sday = extract.getInteger("start_day")
        const smonth = extract.getString("start_month")
        const syear = extract.getInteger("start_year")
        const shour = extract.getInteger("start_hour")
        const sminute = extract.getInteger("start_minute")

        const eday = extract.getInteger("end_day")
        const emonth = extract.getString("end_month")
        const eyear = extract.getInteger("end_year")
        const ehour = extract.getInteger("end_hour")
        const eminute = extract.getInteger("end_minute")

        if (eday) 
            endDate.setDate(eday)
        
        if (emonth)
            endDate.setMonth(Number(emonth))

        if (eyear)
            endDate.setFullYear(eyear)

        if (ehour)
            endDate.setHours(ehour)
        
        if (eminute)
            endDate.setMinutes(eminute)

        if (sday) 
            startDate.setDate(sday)
        
        if (smonth)
            startDate.setMonth(Number(smonth))

        if (syear)
            startDate.setFullYear(syear)

        if (shour)
            startDate.setHours(shour)
        
        if (sminute)
            startDate.setMinutes(sminute)


        const now = Math.floor(endDate.getTime() / 1000)
        const unix = Math.floor(startDate.getTime() / 1000)

        const hah = new newEmbed("OK", "FF0000", now, unix, "yes")

        interact.reply({
            content: "<t:" + unix + ":F>,",
            embeds: [hah.getEmbed()],
        })
    }
}

