import { clientAction } from "../clientAction";


export class time extends clientAction {
    public action() {
        console.log("time set")

        this.getInteract().reply({
            content: "<t:" + Math.floor(Date.now() / 1000) + ":F>",
        })
    }
}