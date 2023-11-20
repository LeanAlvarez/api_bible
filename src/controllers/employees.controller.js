import { pool } from "../db.js"

//get
export const getEmployees = async (req,res) => {
    const [books] = await pool.query("SELECT * FROM verses WHERE chapter = 1 AND book_id = 5")
    res.json(books)
}

//post
export const createEmployees = (req,res) => res.send('creandro empleados 2')

//put
export const updateEmployees = (req,res) => res.send('actualizando empleados')

//delete

export const deleteEmployees = (req,res) => res.send('eliminando empleados')