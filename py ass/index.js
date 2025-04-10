// Part 1: Design Your Own Class - Smartphone and SmartphoneWithCamera

class Smartphone {
  constructor(model, brand, batteryLife) {
    this.model = model;        // model of the smartphone
    this.brand = brand;        // brand of the smartphone
    this.batteryLife = batteryLife; // battery life in percentage
  }

  // Method to make a call
  makeCall(number) {
    console.log(`Calling ${number}...`);
  }

  // Method to charge the phone
  charge() {
    this.batteryLife = 100;
    console.log(`Phone charged to ${this.batteryLife}%`);
  }

  // Method to show current battery
  showBattery() {
    console.log(`Battery life: ${this.batteryLife}%`);
  }
}

class SmartphoneWithCamera extends Smartphone {
  constructor(model, brand, batteryLife, cameraQuality) {
    // Call the constructor of the parent class (Smartphone)
    super(model, brand, batteryLife);
    this.cameraQuality = cameraQuality;  // camera quality in megapixels
  }

  // Method to take a photo
  takePhoto() {
    console.log(`Taking a photo with ${this.cameraQuality}MP camera!`);
  }
}

// Creating objects
const myPhone = new Smartphone("iPhone 13", "Apple", 80);
myPhone.makeCall("123-456-7890");
myPhone.charge();
myPhone.showBattery();

const cameraPhone = new SmartphoneWithCamera("Galaxy S21", "Samsung", 60, 108);
cameraPhone.takePhoto();
cameraPhone.showBattery();

// Part 2: Polymorphism Challenge - Animals/Vehicle Classes

class Animal {
  move() {
    console.log("The animal moves in its own way.");
  }
}

class Car extends Animal {
  move() {
    console.log("Driving 🚗");
  }
}

class Plane extends Animal {
  move() {
    console.log("Flying ✈️");
  }
}

class Fish extends Animal {
  move() {
    console.log("Swimming 🐠");
  }
}

// Creating objects and testing polymorphism
const car = new Car();
car.move();  // "Driving 🚗"

const plane = new Plane();
plane.move();  // "Flying ✈️"

const fish = new Fish();
fish.move();  // "Swimming 🐠"
