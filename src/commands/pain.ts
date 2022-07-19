import mongoose from "mongoose";
import { courseModel } from "../models/courseModel";
import { embedResult } from "../models/embedResult";
import { clientAction } from "./clientAction";


export class pain extends clientAction {
    public action() {
        console.log("the cat has been attacked.")
        const interact = this.getInteract()

        const embed = new embedResult(interact.options.getString("pain") || "", "ok")
        const found = this.read("ENGGEN 204")
        

        interact.reply({
            embeds: [embed.getEmbed()],
        })

    }

    public async read(course:string) {
        await mongoose.connect(
            process.env.MONGOOSE || '',
            {
            }
        ).then(()=>{
            console.log("connected")
    
        }).catch((err)=>{
            console.log(err)
        })

        let find = new courseModel
        let query = find.exporting(course)
        

        const ok = await query.find({}, 'start end')
        
        ok[0].title

        mongoose.connection.close().then(()=>{
            console.log("closed")
    
        }).catch((err)=>{
            console.log(err)
        })

        return ok
    }
}