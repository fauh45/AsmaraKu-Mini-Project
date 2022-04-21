import axios from "axios"

const getCovidDataFromAPI = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://data.covid19.go.id/public/api/update.json").then(response => {
            const { harian, ...rest } = response.data.update

            resolve(rest)
        }).catch(err => reject(err))
    })
}

export { getCovidDataFromAPI }