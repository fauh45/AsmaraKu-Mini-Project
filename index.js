import "dotenv/config"

import express from "express"

import serverConfig from "./src/configs/server.config"
import covidDataRouter from "./src/route/covidData.route"

import path from "path"
import Bree from "bree"

import './src/services/db.services'

const app = express()
const bree = new Bree({
    root: path.resolve("src/jobs"),
    jobs: [
        {
            name: 'dailyCovidUpdate',
            interval: 'at 11:59 pm' //Run at 11:59 pm everyday
        }
    ]
})

app.use("/covid", covidDataRouter)

bree.start()
app.listen(serverConfig.port, serverConfig.listen, () => {
    console.info(`Listening at http://${serverConfig.listen}:${serverConfig.port}`)
})