import {Router} from "express"
import { register } from "module";
import { registrarCliente, registrarQueja, registrarTarea } from "../controllers/clientes.controllers.js";

let clientesRouter = Router ()

clientesRouter.post ("/registrarCliente", registrarCliente)
clientesRouter.post ("/registrarQueja", registrarQueja)
clientesRouter.post ("/registrarTarea", registrarTarea)


export default clientesRouter;