const env = process.env

export default {
    listen: env.LISTEN || "0.0.0.0",
    port: parseInt(env.PORT || "8000")
}