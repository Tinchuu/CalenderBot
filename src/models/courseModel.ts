import mongoose, { Schema } from "mongoose";
import Deadline from "../models/entry"

export class courseModel {
    private course = Deadline

    public exporting(course:string) {
        return mongoose.model(course, this.course)
    }
}
