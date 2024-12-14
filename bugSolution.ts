function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string {
  return people.map(person => greeter(person)).join(', ');
}

let user = ["Jane", "Doe"];
console.log(greetMultiple(user)); // Correct: Output 'Hello, Jane, Hello, Doe'