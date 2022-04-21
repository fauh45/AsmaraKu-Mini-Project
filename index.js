import "dotenv/config"

import express from "express"
import serverConfig from "./src/configs/server.config"
import covidDataRouter from "./src/route/covidData.route"

import './src/services/db.services'

const app = express()

app.use("/covid", covidDataRouter)

app.listen(serverConfig.port, serverConfig.listen, () => {
    console.info(`Listening at http://${serverConfig.listen}:${serverConfig.port}`)
})