module.exports = ({ env }) => ({
    'mailer-host': env('MAILER_HOST'),
    'mailer-port': env.int('MAILER_PORT'),
    'mailer-user': env('MAILER_USER'),
    'mailer-pass': env('MAILER_PASS'),
    'mailer-display-name': env('MAILER_DISPLAY_NAME'),
    'mailer-to': env('MAILER_TO'),
    'application-manage-link': env('APPLICATIONS_MANAGE_LINK'),
  });