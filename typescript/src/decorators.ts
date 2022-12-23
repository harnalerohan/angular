const cl = console.log;

function logInstanceCreation(target: Function){
  cl(`Instance is created by using Class`);
}

@logInstanceCreation
class Person {
  constructor(public fname: string) {
  }
}

@logInstanceCreation
class Department {
  constructor(public className: string) {
  }
}




