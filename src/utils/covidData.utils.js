import axios from "axios"
import { updateCovidData } from "../services/covidData.service"

const getCovidDataFromAPI = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://data.covid19.go.id/public/api/update.json").then(response => {
            const { harian, ...rest } = response.data.update

            resolve(rest)
        }).catch(err => reject(err))
    })
}

const updateCovidDataFromAPI = () => {
    return new Promise((resolve, reject) => {
        getCovidDataFromAPI().then(APIData => {
            console.debug("Data fetched from API ", APIData)

            updateCovidData(APIData).then(dbResponse => {
                resolve(dbResponse)
            }).catch(e => {
                console.error('Mongo Update Covid Data Error', e)

                reject(e)
            })
        })
    })
}

export { getCovidDataFromAPI, updateCovidDataFromAPI }