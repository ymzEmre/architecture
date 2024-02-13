import { IWorkable } from './IWorkable'

export class Robot implements IWorkable {
  work(): void {
    console.log('Robot is working')
  }
}
