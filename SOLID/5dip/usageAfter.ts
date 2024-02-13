import { ISender } from './after/ISender'
import { EmailSender } from './after/EmailSender'
import { SMSSender } from './after/SMSSender'
import { NotificationService } from './after/NotificationService'

const emailSender: ISender = new EmailSender()
const smsSender: ISender = new SMSSender()

const emailNotificationService = new NotificationService(emailSender)
const smsNotificationService = new NotificationService(smsSender)

emailNotificationService.sendNotification('john@doe.com', 'Hello John')
smsNotificationService.sendNotification('123456789', 'Hello John')
