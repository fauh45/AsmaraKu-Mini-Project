import { getAllCovidData, getLatestCovidData } from "../services/covidData.service"
import { updateCovidDataFromAPI } from "../utils/covidData.utils"


// @ts-ignore
const getAllCovidDataController = (_req, res, next) => {
    try {
        // @ts-ignore
        getAllCovidData().then(dbResponse => {
            res.json(dbResponse)

            next()
        })
    } catch (e) {
        console.error('Get All Covid Error', e)

        next(e)
    }
}

// @ts-ignore
const getLatestCovidDataController = (_req, res, next) => {
    try {
        // @ts-ignore
        getLatestCovidData().then(dbResponse => {
            res.json(dbResponse)

            next()
        })
    } catch (e) {
        console.error('Get Latest Covid Error', e)

        next(e)
    }
}

// @ts-ignore
const updateCovidDataController = (_req, res, next) => {
    try {
        console.info("Covid data update has been requested!")

        updateCovidDataFromAPI().then(data => {
            res.json(data)

            next()
        }).catch(e => {
            next(e)
        })
    } catch (e) {
        console.error('Updating Covid Data Error', e)

        next(e)
    }
}

export {
    getAllCovidDataController,
    getLatestCovidDataController,
    updateCovidDataController
}