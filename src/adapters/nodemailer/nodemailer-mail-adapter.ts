import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4479301c576fd2",
        pass: "04cb73f741cf60"
    }
});

export class NodemailerMailAdapter implements MailAdapter {

async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com',
        to: 'Dariane <darianeabich@gmail.com>',
        subject,
        html: body
    });
}
}