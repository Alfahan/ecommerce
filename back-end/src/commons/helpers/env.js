require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    Database_Server: process.env.DATABASE_SERVER,
    Pass_Sec: process.env.PASS_SEC,
    Jwt_Sec: process.env.JWT_SEC,
    Stripe_Key: process.env.STRIPE_KEY
}