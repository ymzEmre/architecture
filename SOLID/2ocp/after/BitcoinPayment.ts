import { Payment } from './Payment'

// BitcoinPayment.ts dosyası
export class BitcoinPayment implements Payment {
  pay(amount: number): void {
    console.log(`Payment made via Bitcoin: ${amount} TL`)
  }
}
