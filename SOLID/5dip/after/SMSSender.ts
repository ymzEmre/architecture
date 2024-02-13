import { ISender } from './ISender'

export class SMSSender implements ISender {
  send(phoneNumber: string, message: string): void {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`)
  }
}
