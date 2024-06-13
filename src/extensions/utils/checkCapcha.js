const axios = require('axios');
const querystring = require('querystring');

const checkCapcha = async (token, ip) => {
    try {
        const response = await axios.get(`https://${strapi.config.get('capcha.host')}/validate?${
            querystring.stringify({
                secret: strapi.config.get('capcha.smart-capcha-key'),
                token,
                ip,
            })
        }`)

        if (response.data.status !== "ok") {
            return false
        }

        return true
    } catch (err) {
        console.error(err)
    }
}

module.exports = { checkCapcha };