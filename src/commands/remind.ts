import { CommandInteraction } from "discord.js";
import { embedBuilder } from "../models/embedBuilder";
import { embedResult } from "../models/embedResult";
import { clientAction } from "./clientAction";

export class remind extends clientAction {
    
    public action() {
        let embed = new embedResult("", "")
        return embed
    }

}

