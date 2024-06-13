module.exports = ({ env }) => ({
  "smart-capcha-key": env('SMARTCAPTCHA_SERVER_KEY'),
  "host": env('SMARTCAPTCHA_HOST'),
});