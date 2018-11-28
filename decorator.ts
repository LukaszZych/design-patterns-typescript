// standard class implementationabstract class Car {  abstract costCar(): number;  abstract colorCar(): string;}// concrete classesclass Fiat extends Car {  costCar(): number {    return 10000;  }  colorCar(): string {    return 'red';  }}class Mercedes extends Car {  costCar(): number {    return 20000;  }  colorCar(): string {    return 'white';  }}// add decoratorabstract class CarDecorator implements Car {  protected car: Car;  constructor(car: Car) {    this.car = car;  }  colorCar(): string {    return this.car.colorCar();  }  costCar(): number {    return this.car.costCar();  }}// add more precise decoratorclass RadioDecorator extends CarDecorator {  constructor(car: Car) {    super(car);  }  costCar() {    return super.costCar() + 500;  }}// How to use:let mercedes: Car = new Mercedes();console.log('merc, price: ', mercedes.costCar());// dynamically add new behaviour to the classmercedes = new RadioDecorator(mercedes);console.log('merc, price: ', mercedes.costCar());// this class wasn't changedlet innyMercedes: Car = new Mercedes();console.log('another merc, price: ', innyMercedes.costCar());// Output:// merc, price:  20000// merc, price:  20500// another merc, price:  20000