import { IWorker } from './IWorker'

export class Robot implements IWorker {
  work(): void {
    console.log('Robot is working')
  }

  eat(): void {
    throw new Error('Robot cannot eat')
  }
}
