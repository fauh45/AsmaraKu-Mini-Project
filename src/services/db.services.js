import { MongoClient } from "mongodb";
import dbConfig from "../configs/db.config";
import async from "async_polyfill";

const client = new MongoClient(dbConfig.connection_string)

async(function* () {
    yield client.connect()
})()

export default client