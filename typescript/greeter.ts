interface Person {
  firstName: string
  lastName: string
}

class Student {
  fullName: string
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

function greeter(person : Person) {
  return 'Hey there, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'Doe')

const greeting = greeter(user)

console.log(greeting)
