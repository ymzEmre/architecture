import { Payment } from './Payment'

export class BasePayment implements Payment {
  pay(amount: number): void {
    console.log(`Payment made: ${amount} TL`)
  }
}
