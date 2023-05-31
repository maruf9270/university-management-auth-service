import express, { Application, Request,Response } from "express"
export const app:Application = express();
export const port = process.env.PORT || 5000;

// For testing purpose api route
app.get('/',(req:Request, res:Response )=>{
    res.send("Server is working")
})

