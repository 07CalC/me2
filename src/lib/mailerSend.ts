import { MailerSend } from 'mailersend'

export const mailerSend = new MailerSend({
  apiKey: process.env.MAILER_SEND_API || '',
});


