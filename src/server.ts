import mongoose from "mongoose";
import { app, port } from "./app";
import config from "./config/index";

async function database() {
    try{
        await mongoose.connect(config.database_url as string);
        app.listen(config.port,()=>{
            console.log("Server started successfully on port ",config.port);
        })
        console.log("Database connect successfully");
    }
    catch(err){
        console.log("Faild to connect to the database",err);
    }
   
  
  }

database()