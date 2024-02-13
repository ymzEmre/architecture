import { ISender } from './ISender'

export class NotificationService {
  private sender: ISender
  constructor(sender: ISender) {
    this.sender = sender
  }
  sendNotification(contact: string, message: string): void {
    this.sender.send(contact, message)
  }
}
