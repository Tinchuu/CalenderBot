import { Formatters } from "discord.js";
import { clientAction } from "../clientAction";


export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()

        const day = interact.options.getInteger("day")
        const month = interact.options.getString("month")
        const year = interact.options.getInteger("year")

        const inputDate = new Date(Number(year) + String(month) + Number(day))
        const unix = Math.floor(inputDate.getTime() / 1000)
        

        interact.reply({
            content: "<t:" + unix + ":F>, Difference Raw: " + timeDif(unix) + " Difference Formatted: " + formatUnix(timeDif(unix)),
        })
    }
}

function timeDif(input:number) {
    let dateNow = Math.floor(Date.now() / 1000)
    let dif = input - dateNow
    return dif
}

function formatUnix(input:number) {
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