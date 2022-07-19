import { MessageEmbed } from "discord.js"

export class embedBuilder {
    private embed = new MessageEmbed()

    public getEmbed() {
        return this.embed
    }
    public timeDif(end:number) {
        return end - Math.floor(Date.now() / 1000)
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