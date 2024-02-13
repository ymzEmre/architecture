import { NotificationService } from './before/NotificationService'

const notificationService = new NotificationService()
notificationService.sendEmailNotification('john@doe.com', 'Email-Hello John ')
notificationService.sendSMSNotification('1234567890', 'Phone-Hello John')
