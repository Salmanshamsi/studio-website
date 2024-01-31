import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import "./config/index.js";
import path from 'path';
const app = express();


// DataBase initialization

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected sucessfully !");
}).catch((err)=>{
    console.log("connection Error : !" + err);
})

// middlewares..

app.use(cors());
app.use(bodyParser.json());
app.set(express.static(path.join(process.cwd() + '/public')));

// REST APIs..



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Run server sucessfully');
});