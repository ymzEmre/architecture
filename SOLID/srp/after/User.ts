export class User {
  private name: string
  private email: string

  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }

  getUserInfo(): string {
    return `Name: ${this.name}, Email: ${this.email}`
  }
}

class UserRepository {
  saveToDatabase(): void {
    // ...
  }
}

class EmailSender {
  sendEmail(): void {
    // ...
  }
}

// usage
const user = new User('John Doe', 'oe@ex')

const userRepository = new UserRepository()
userRepository.saveToDatabase()

const emailSender = new EmailSender()
