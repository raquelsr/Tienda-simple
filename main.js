class Tienda {

    constructor(name, schedule) {
      this.name = name;
      this.products = [];
      this.employees = [];
      this.schedule = schedule;
      this.clients = [];
    }
  
    addProduct(name) {
      this.products.push(name);
    }
  
    fillProducts() {
      for (let i = 0; i < 10; i++) {
        this.products.push(`Producto ${i}`);
      }
    }
  
    hireEmployee(person, type) {
        /*let employee;
        switch (type) {
            case 'dependent':
                employee = new Dependent(person);
                break;
            case 'guard':
                employee = new Guard(person);
                break;
            case 'manager':
                employee = new Manager(person);
                break;
            default:
                employee = new Dependent(person);
                break;
      }
      this.employees.push(employee);
      return employee;*/

      // REFACTOR SWITCH: En este caso habría que hacer tres tests por cada caso del switch, 
      // es mejor crear un objeto y dependiendo del tipo realizar un new de ese tipo.

      const position = {
          dependent : Dependent,
          guard: Guard,
          manager: Manager
      }
      const employee = new position[type](person);
      this.employees.push(employee);
      return employee;
    }
  
    addClient(person) {
      const client = new Client(person);
      this.clients.push(client);
      return client;
    }
}
  
class Person {
  
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    introduce() {
      console.log(`Hola, me llamo ${this.name} ${this.surname}.`);
    }
  
    leave() {
      console.log('Hasta la próxima!');
    }
}
  
class Employee extends Person {
  
    constructor(person, num) {
        super(person.name, person.surname);
        this.num = num;
    }
  
    wait() {
      console.log('Espere un momentito, por favor.');
    }
}
  
class Client extends Person {
  
    constructor(person) {
      super(person.name, person.surname);
    }
  
    requestProduct(name) {
      console.log(`Me gustaría comprar el producto: ${name}`);
    }
  
    pay() {
      console.log('Aquí tiene el dinero. Gracias')
    }
}
  
class Dependent extends Employee {
  
    constructor(person, num) {
      super(person, num);
    }
  
    lookAfter() {
      console.log('Aquí tiene lo que busca.');
    }
}
  
  
class Guard extends Employee {
  
    constructor(person, num) {
        super(person, num);
    }
  
    lookAfter() {
      console.log('Están todos las alarmas desactivadas');
    }
}
  
  
class Manager extends Employee {
  
    constructor(person, num) {
        super(person, num);
    }
  
    lookAfter() {
      console.log('Son 20€. ¿En efectivo?');
    }
}
  
function execute() {
    console.log('Cargando datos...');
    const pullandbear = new Tienda('pullandbear');
    const maria = new Person('Maria', 'Garcia');
    const raquel = new Person('Raquel', 'S');
    const juan = new Person('Juan', 'Muñoz');
    const pepe = new Person('Pepe', 'Gomez');
    const antonio = new Person('Antonio', 'Perez');
    pullandbear.fillProducts();
    pullandbear.hireEmployee(raquel, 'manager');
    pullandbear.hireEmployee(juan, 'guard');
    pullandbear.hireEmployee(pepe, 'guard');
    pullandbear.hireEmployee(antonio, 'dependent');
    pullandbear.addClient(maria);
    console.log('Datos cargados');
}
  
  