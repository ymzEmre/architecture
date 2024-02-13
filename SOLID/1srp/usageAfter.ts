import { User } from './after/User'
import { UserRepository } from './after/UserRepository'
import { EmailService } from './after/EmailService'

const user = new User('John Doe', 'john@doe.com')

const userRepository = new UserRepository()
userRepository.saveToDatabase(user)

const emailService = new EmailService()
emailService.sendEmail(user)
