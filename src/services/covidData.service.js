import async from "async_polyfill";
import { default as client } from "./db.services";

const covidDataCollection = client.db().collection("covid_data")

// @ts-ignore
const getAllCovidData = () => {
    return async(function* () {
        // @ts-ignore
        const allCovidData = yield covidDataCollection.find({}).toArray()

        return allCovidData
    })()
}

// @ts-ignore
const getLatestCovidData = () => {
    return async(function* () {
        // @ts-ignore
        const latestCovidData = yield covidDataCollection.findOne({}, { sort: { timestamp: -1 } })

        return latestCovidData
    })()
}

// @ts-ignore
const updateCovidData = (data) => {
    return new Promise((resolve, reject) => {
        const dataTimestamp = new Date(data.penambahan.tanggal)

        covidDataCollection.updateOne({ timestamp: dataTimestamp }, { $set: { metadata: data } }, { upsert: true })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export {
    getAllCovidData,
    getLatestCovidData,
    updateCovidData
}