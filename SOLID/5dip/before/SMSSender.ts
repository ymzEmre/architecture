export class SMSSender {
  sendSMS(phone: string, message: string) {
    console.log(`SMS sent to ${phone} with message: ${message}`)
  }
}
