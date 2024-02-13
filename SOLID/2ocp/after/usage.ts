import { BasePayment } from './BasePayment'
import { PayPalPayment } from './PayPalPayment'
import { BitcoinPayment } from './BitcoinPayment'

const basePayment = new BasePayment()
const payPalPayment = new PayPalPayment()
const bitcoinPayment = new BitcoinPayment()

basePayment.pay(100)
payPalPayment.pay(100)
bitcoinPayment.pay(100)
