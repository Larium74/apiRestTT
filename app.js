import express from "express"
import cors from "cors"
import connectiondb from "./database/connection.js"
import clientesRouter from "./routes/clientes.routes.js"

const PORT = process.env.PORT

let app = express ()

app.use (cors ())
app.use (express.json ())
app.use (express.urlencoded ({extended: false}))
app.use (clientesRouter)


app.listen (PORT, ()=> console.log ("Servidor inicializado en el puerto "+PORT))