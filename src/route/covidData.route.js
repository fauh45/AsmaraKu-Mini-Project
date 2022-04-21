import express from "express"
import { getAllCovidDataController, getLatestCovidDataController, updateCovidDataController } from "../controller/covidData.controller"

const router = express.Router()

router.get("/", getAllCovidDataController)
router.get("/latest", getLatestCovidDataController)
router.post("/update", updateCovidDataController)

export default router