const env = require('../commons/helpers/env')
const stripe = require('stripe')(env.Stripe_Key)
const response = require('../commons/helpers/error_handler')

exports.paymentStripe = async (req, res) => {
    try {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'usd',
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                return response.failed(res, stripeErr, stripeErr.message )
            } else {
                return response.Success(res, stripeRes)
            }
        }
        )
    } catch (err) {
        return response.failed(err, [], err.message)
    }
}