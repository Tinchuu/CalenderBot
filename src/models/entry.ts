import mongoose, { Schema } from "mongoose";

const Deadline = new Schema({
    title: String,
    start: Number,
    end: Number,
    description: String,
    topic: String,
}, {timestamps: true})


export default Deadline