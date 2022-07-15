import { clientAction } from "../clientAction";


export class time extends clientAction {
    public action() {
        console.log("time set")
        let dateTime = new Date()

        this.getInteract().reply({
            content: "<t:" + Math.floor(dateTime.getTime() / 1000) + ":F>",
        })
    }
}