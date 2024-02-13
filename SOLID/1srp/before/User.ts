class User {
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
