export class Payment {
  constructor(private method: string) {}

  pay(amount: number): void {
    if (this.method === 'creditCard') {
      console.log(`Paid by credit card: ${amount} TL`)
    } else if (this.method === 'paypal') {
      console.log(`Paid by paypal: ${amount} TL`)
    } else if ((this, this.method === 'bitcoin')) {
      console.log(`Paid by bitcoin: ${amount} TL`)
    }
  }
}
