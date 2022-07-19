import { clientAction } from "./clientAction"
import { courseModel } from "../models/courseModel"
import mongoose, { mongo } from "mongoose"
import { singularEmbed } from "../models/singularEmbed"



export class set extends clientAction {
    public action() {
        console.log("setting")
        const interact = this.getInteract()
        const extract = this.getInteract().options

        const startDate = new Date()
        const endDate = new Date()

        const sday = extract.getInteger("start_day")
        const smonth = extract.getString("start_month")
        const syear = extract.getInteger("start_year")
        const shour = extract.getInteger("start_hour")
        const sminute = extract.getInteger("start_minute")

        const eday = extract.getInteger("end_day")
        const emonth = extract.getString("end_month")
        const eyear = extract.getInteger("end_year")
        const ehour = extract.getInteger("end_hour")
        const eminute = extract.getInteger("end_minute")
        

        if (eday) 
            endDate.setDate(eday)
        
        if (emonth)
            endDate.setMonth(Number(emonth))

        if (eyear)
            endDate.setFullYear(eyear)

        if (ehour)
            endDate.setHours(ehour)
        
        if (eminute)
            endDate.setMinutes(eminute)

        if (sday) 
            startDate.setDate(sday)
        
        if (smonth)
            startDate.setMonth(Number(smonth))

        if (syear)
            startDate.setFullYear(syear)

        if (shour)
            startDate.setHours(shour)
        
        if (sminute)
            startDate.setMinutes(sminute)



        const end = Math.floor(endDate.getTime() / 1000)
        const start = Math.floor(startDate.getTime() / 1000)

        const hah = new singularEmbed(String(extract.getString("title")), "FF0000", start, end, String(extract.getString("description")))

        this.create(String(extract.getString("title")), Number(start), Number(end), String(extract.getString("description")), String(extract.getString("topic")))
        


        interact.reply({
            content: "<t:" + start + ":F>,",
            embeds: [hah.getEmbed()],
        })
    }

    public async create(title:string, start:Number, end:Number, description:string, topic:string) {
        await mongoose.connect(
            process.env.MONGOOSE || '',
            {
            }
        ).then(()=>{
            console.log("connected")
    
        }).catch((err)=>{
            console.log(err)
        })

        const course = new courseModel

        const entry =  await course.exporting(topic).create({
            title: title,
            start: start,
            end: end,
            description: description,
            topic: topic,
        })

        const saveEntry = await entry.save()

        mongoose.connection.close().then(()=>{
            console.log("closed")
    
        }).catch((err)=>{
            console.log(err)
        })
    }
}

