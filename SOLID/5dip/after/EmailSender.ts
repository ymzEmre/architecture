import { ISender } from './ISender'

export class EmailSender implements ISender {
  send(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`)
  }
}
