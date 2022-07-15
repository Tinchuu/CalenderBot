import { clientAction } from "../clientAction";


export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()

        const day = interact.options.getInteger("day")
        const month = interact.options.getString("month")
        const year = interact.options.getInteger("year")

        const inputDate = new Date(Number(year) + String(month) + Number(day))
        

        interact.reply({
            content: "<t:" + Math.floor(inputDate.getTime() / 1000) + ">",
        })
    }
}