import {createPool} from "mysql2/promise"
import { objectConnection } from "./objectConnection.js"

let connectiondb = createPool (objectConnection)

connectiondb.getConnection ()
.then ((result)=> console.log ("Conexión exitosa con la base de datos"))
.catch ((error)=> console.log ("Error con la conexión con la base de datos", error))

export default connectiondb;