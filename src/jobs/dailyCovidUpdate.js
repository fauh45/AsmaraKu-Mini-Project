import { updateCovidDataFromAPI } from "../utils/covidData.utils";

updateCovidDataFromAPI().then(data => {
    console.info("Covid data has been updated!")
    console.debug("MongoDB update statistics ", data)
}).catch(e => {
    console.error("Covid data daily update error!", e)
})