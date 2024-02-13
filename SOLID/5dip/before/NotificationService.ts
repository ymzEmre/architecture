import { EmailSender } from './EmailSender'
import { SMSSender } from './SMSSender'

export class NotificationService {
  private emailSender: EmailSender
  private smsSender: SMSSender

  constructor() {
    this.emailSender = new EmailSender()
    this.smsSender = new SMSSender()
  }

  sendEmailNotification(email: string, message: string): void {
    this.emailSender.sendEmail(email, message)
  }

  sendSMSNotification(phone: string, message: string): void {
    this.smsSender.sendSMS(phone, message)
  }
}
