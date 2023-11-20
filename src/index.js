import express from "express";

import employeesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()




app.use(employeesRoutes)
app.use(indexRoutes)

app.listen(3000)
console.log("Server corriendo en el 3000")