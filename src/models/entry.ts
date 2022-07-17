import { MessageEmbed } from "discord.js";
import mongoose, { Schema } from "mongoose";

const entSchema = new Schema({
    content: {
        type: MessageEmbed,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },

}, {timestamps: true})

const Ent = mongoose.model("CalBotData", entSchema)
module.exports = Ent