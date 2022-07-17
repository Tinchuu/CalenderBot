import { clientAction } from "./clientAction";


export class currentTime extends clientAction {
    public action() {
        console.log("Current time returned")

        this.getInteract().reply({
            content: "<t:" + Math.floor(Date.now() / 1000) + ":F> <:140moment:850320204755107841> :flushed:",
        })
    }
}