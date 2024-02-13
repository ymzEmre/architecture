import { IWorker } from './IWorker'

export class Person implements IWorker {
  work(): void {
    console.log('Person is working')
  }

  eat(): void {
    console.log('Person is eating')
  }
}
