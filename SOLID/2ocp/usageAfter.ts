import { BasePayment } from './after/BasePayment'
import { PayPalPayment } from './after/PayPalPayment'
import { BitcoinPayment } from './after/BitcoinPayment'

const basePayment = new BasePayment()
const payPalPayment = new PayPalPayment()
const bitcoinPayment = new BitcoinPayment()

basePayment.pay(100)
payPalPayment.pay(100)
bitcoinPayment.pay(100)
