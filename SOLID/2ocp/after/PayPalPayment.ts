import { Payment } from './Payment'

export class PayPalPayment implements Payment {
  pay(amount: number): void {
    console.log(`Payment made via PayPal: ${amount} TL`)
  }
}
