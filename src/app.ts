import express,{Application, Request, Response} from "express"
const app:Application = express()
const PORT:number = 3000

app.get("/",(req:Request, res:Response)=>{
  res.send("Hello")
})

app.get("/about",(req:Request, res:Response)=>{
  res.send("About Page")
})


app.get("/contact",(req:Request, res:Response)=>{
  res.send("Contact Page")
})


app.listen(PORT,()=>{
  console.log("server has started at port", PORT)
})