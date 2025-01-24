import express, { json, static as _static,response } from "express";
import mongoose from "mongoose";  
import verify from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import multer, { diskStorage } from 'multer';
import {config} from "dotenv"
config()
const {connect} = mongoose

const app = express()
// const mimeTypes = ["image/jpeg", "image/jpg", "image/png"]
import { createServer as _createServer } from "http";

// import {Server} from 'socket.io';


import cors from 'cors';
var whitelist = ['http://localhost:5501', 'https://editor-next.swagger.io']
var corsOptions = {
    credentials: true,
    // origin: function(origin, callback) {
    //     console.log(origin)
    //   if (whitelist.indexOf(origin) !== -1) {
    //     callback(null, true)
    //   } else {
    //     callback(new Error('Not allowed by CORS'))
    //   }
    // }
    origin:"*"
}
app.use(cors(corsOptions));

app.use(json())
app.use(cookieParser())
app.use(_static('upload'))


const connectDB = async () => {
    await connect('mongodb://localhost:27017/resturant-reservation')
        .then(() => console.log('Connected Successfully'))
        .catch((err) =>{
            console.log("err mongoose connect", err)
            console.error('Not Connected')
        });
}

// connectDB()
const secretKeyJWT = 'khnk12je928u9i%*&^Y*UIHJUty86y8iUHU*^*6*^*Trujihihiu(*&(^%'
const server = _createServer(app)


app.get('/', (req, res, next)=> {
    res.status(200).send('aaa')
    console.log('visit')
})

server.listen(5000, () => {
    console.log('server is run')
})
