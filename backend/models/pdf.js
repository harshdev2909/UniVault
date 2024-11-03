// const mongoose = require('mongoose');
import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
   title:{
    type:String
    },
    pdf:{
        type:String
    }
},{collation:"pdfDetails"})

export const pdf = mongoose.model("pdfDetails",pdfSchema);