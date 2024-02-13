import { User } from './User'
import { UserRepository } from './UserRepository'
import { EmailService } from './EmailService'

const user = new User('John Doe', 'john@doe.com')

const userRepository = new UserRepository()
userRepository.saveToDatabase(user)

const emailService = new EmailService()
emailService.sendEmail(user)
