import { exit } from "process"
import client from "../services/db.services"

const init = () => {
    return new Promise((resolve, reject) => {
        client.db().createCollection("covid_data").then(_ => {
            console.info("Created collection!")
            client.db().collection("covid_data").createIndex({ 'timestamp': 1 }).then(_ => {
                console.info("Index on timestamp has been created")
                resolve(true)
            }).catch(e => reject(e))
        }).catch(e => reject(e))
    })
}

init().then(_ => console.info(`Collection has been created!`)).catch(e => console.error(e)).finally((/** @type {any} */ _) => exit())