import { IMailProvider } from "../IEmailProvider";
import { IMessage } from "../IMessage";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{
    private transporter: Mail;
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "d575b7f1b1be9e",
                pass: "7c63691fa80271",
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}