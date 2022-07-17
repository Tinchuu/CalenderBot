import { clientAction } from "../clientAction";


export class pain extends clientAction {
    public action() {
        console.log("the cat has been attacked.")
        const interact = this.getInteract()


        interact.reply({
            content: "attacks Cat " + interact.options.getInteger("times"),
        })

    }
}