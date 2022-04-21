# AsmaraKu Mini Project

Mini Project for AsmaraKu Internship

## Features

As per the mini project requirement given in the email. The mini project has been implemented with

1. HTTP API to get the data that has been put to the server, and also updates the data

   `GET /` to get all of the data points, `GET /latest` to get just the latest data, and `POST /update` to update the data in the database

2. Updates from COVID public API (in this case from [covid19.go.id](https://data.covid19.go.id/public/api/update.json))
3. Automatically updates the data at 11:59 PM everyday, and if the data has changed (implemented by checking the date) to add it as data point

   p.s. Also it will update the existing data if there are changes to the numbers, as Covid data could change even in one day

## Setup

To try and run the application, I recommend to use docker compose for easy setup of the databse, follow these steps

1. Start the database with docker compose with

   ```bash
   docker-compose up
   ```

2. Install all the dependencies using `yarn`

   ```bash
   yarn
   ```

3. Run the `init:db` script to add the required collection

   ```bash
   yarn init:db
   ```

4. Add `.env` to configure the database connection strings

   While the server will default use the local mongodb database, it is better to point it out to the right databae. So make `.env` file in the root of the project and fill it up with the following content.

   ```
   MONGO_CONNECTION_STRING=mongodb://localhost:27017/covid
   ```

5. Start the application

   ```bash
   yarn
   ```

## Timing, Challenges, and Resources

In this part, it will be shown the time, described the challenges, and resources I used working on part A and B of the mini project.

### Part A

Starts at 08:34 21 April 2022 and is done at 11:07 21 April 2022 with duration of 2 hours and 33 minutes.

#### Challenges

Here are a few challenges I found while working at the Part A of the project

1. I usually use more modern version of Javascript (ES2020 upwards), so there are a few challenges adapting back into the old Promise-based API. Especially on awaits function, so I used `async_polyfill` to polyfill some function that I make with async-await API methodology.
2. First I was trying to use the new feture of MongoDB, [time series collection](https://www.mongodb.com/docs/manual/core/timeseries-collections/), but turns out it does not allow for update with query into it's `timeField` (see [docs](https://www.mongodb.com/docs/manual/core/timeseries/timeseries-limitations/#updates-and-deletes)). So I had to remake the `initDb` script to just use the regular collection, but with the same data model, and I've added index into the `timeField` (attribute `timestamp`) because it will be used a lot for query key.

#### Resources

Here are the resources I use while making this part of the mini-project

1. Express.js Project Structure ([github](https://github.com/geshan/expressjs-structure))
2. MongoDB node driver ([documentation](https://www.mongodb.com/docs/drivers/node/current/))
3. MongoDB Docker Image ([docker hub](https://hub.docker.com/_/mongo))
4. Async Polyfill Function ([githib](https://github.com/kutlugsahin/async_polyfill))

### Part B

Starts at 11:35 21 April 2022 and is done at 11:59 21 April 2022 with duration of 24 minutes.

#### Challenges

Here are a few challenges I found while working at the Part B of the project

1. I was wondering how to do testing on function that will run at a specific time, so I set the time of trigger 5 seconds after it ran, and see how it runs.
2. Also to test that the `updateOne` command from MongoDB runs as it should, I change the value of the metadata manually and see if it changes with the real data from the API. And surely it does updates it to the real data gathered from the API.

#### Resources

Here are the resources I use while making this part of the mini-project

1. Bree Documentation (used for scheduling, [documentation](https://jobscheduler.net/#/))
