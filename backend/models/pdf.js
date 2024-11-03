import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
   title:{
    type:String
    },
    pdf:{
        type:String
    }
},{ collation: { locale: 'en', strength: 2 } })

export const pdf = mongoose.model("pdfDetails",pdfSchema);