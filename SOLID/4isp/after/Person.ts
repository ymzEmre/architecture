import { IFeedable } from './IFeedable'
import { IWorkable } from './IWorkable'

export class Person implements IWorkable, IFeedable {
  work(): void {
    console.log('Person is working')
  }

  eat(): void {
    console.log('Person is eating')
  }
}
