import { appendFile } from "fs";
import connectiondb from "../database/connection.js";

export let registrarCliente = (req, res) => {
    console.log ("Accediendo a la ruta /registrarCliente")
    const {nombres, apellidos, edad, email, sexo} = req.body

    connectiondb.query ("INSERT INTO Clientes (Nombres_Cliente, Apellidos_Clientes, Edad_Cliente, Email_Cliente, Sexo_Cliente) VALUES (?, ?, ?, ?, ?)", [nombres, apellidos, edad, email, sexo])
    .then ((data)=> {
        console.log ("El cliente "+nombres+" "+apellidos+" se ha registrado exitosamente")
        res.status(200).json({
            Mensaje: "El cliente se ha registrado exitosamente"
        })
    })
    .catch ((error)=> {
        console.log ("Hubo un error al registrar al cliente", error)
        res.status(404).json({
            Mensaje: "Lo sentimos, no se pudo registrar al cliente"
        })
    })
}







export let registrarQueja = (req, res) => {
    console.log("/registrarQueja");
    const { nombres, apellidos, queja } = req.body;

    connectiondb.query("SELECT ID_Cliente FROM Clientes WHERE Nombres_Cliente = ? AND Apellidos_Clientes = ?", [nombres, apellidos])
    .then((data) => {
        if (data[0].length === 0) {
            console.log("El cliente no se encuentra registrado aún");
            res.status(200).json({
                Mensaje: "Oh, vemos que no te encuentras registrado",
                Cliente_registrado: 0
            });
        } else {
            const id_cliente = data[0][0].ID_Cliente;
            console.log("De acuerdo, el ID del cliente de la queja es " + id_cliente);

            return connectiondb.query("INSERT INTO Quejas (ID_Cliente_Queja, Motivo_Queja) VALUES (?, ?)", [id_cliente, queja]);
        }
    })
    .then((result) => {
        if (result) {
            console.log("La queja se ha registrado exitosamente");
            res.status(200).json({
                Mensaje: "La queja se ha registrado exitosamente"
            });
        }
    })
    .catch((error) => {
        console.log("Ha ocurrido un error:", error);
        res.status(404).json({
            Mensaje: "Lo sentimos, ha ocurrido un error al procesar tu solicitud"
        });
    });
};






export let registrarTarea = (req, res) => {
    console.log("/registrarQueja");
    const { nombres, apellidos, tarea } = req.body;

    connectiondb.query("SELECT ID_Cliente FROM Clientes WHERE Nombres_Cliente = ? AND Apellidos_Clientes = ?", [nombres, apellidos])
    .then((data) => {
        if (data[0].length === 0) {
            console.log("El cliente no se encuentra registrado aún");
            res.status(200).json({
                Mensaje: "Oh, vemos que no te encuentras registrado",
                Cliente_registrado: 0
            });
        } else {
            const id_cliente = data[0][0].ID_Cliente;
            console.log("De acuerdo, el ID del cliente de la tarea es " + id_cliente);

            return connectiondb.query("INSERT INTO Tareas (ID_Cliente_Tarea, Asunto_Tarea) VALUES (?, ?)", [id_cliente, tarea]);
        }
    })
    .then((result) => {
        if (result) {
            console.log("La tarea se ha registrado exitosamente");
            res.status(200).json({
                Mensaje: "La tarea se ha registrado exitosamente"
            });
        }
    })
    .catch((error) => {
        console.log("Ha ocurrido un error:", error);
        res.status(404).json({
            Mensaje: "Lo sentimos, ha ocurrido un error al procesar tu solicitud"
        });
    });
};