const env = process.env

export default {
    connection_string: env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/covid'
}