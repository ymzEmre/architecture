class A {
  private privateData: number

  constructor() {
    this.privateData = 0
  }

  collaborateWithB(objB: B): void {
    objB.accessPrivateDataA(this)
  }
}

class B {
  private privateDataB: number

  constructor() {
    this.privateDataB = 0
  }

  accessPrivateDataA(objA: A): void {
    objA['privateData'] = 10
  }
}

const objA = new A()
const objB = new B()

objA.collaborateWithB(objB)

console.log(objA) // A { privateData: 10 }
