// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, produce, year, maxSpeed, volume) {
    this.model = model;
    this.produce = produce;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = () => {
        console.log(`модель: ${this.model}`)
        console.log(`виробник: ${this.produce}`)
        console.log(`рік випуску: ${this.year}`)
        console.log(`максимальна швидкість: ${this.maxSpeed}`)
        console.log(`обєм двигуна: ${this.volume}`)
    };
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed = maxSpeed + newSpeed;
    };
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = (newYear) => {
        this.year = newYear;
    };
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = (driver) => {
        this.driver = driver;
    };
}

let addCar = new Car('Volksvagen', 'Germany', 2019, 200, 2.0);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(40);
addCar.drive();
addCar.changeYear(2020)
addCar.info();
addCar.addDriver('Eney');
console.log(addCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor(model, produce, year, maxSpeed, volume) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`модель: ${this.model}`)
        console.log(`виробник: ${this.produce}`)
        console.log(`рік випуску: ${this.year}`)
        console.log(`максимальна швидкість: ${this.maxSpeed}`)
        console.log(`обєм двигуна: ${this.volume}`)
    };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue;
    };

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
    }
}

let addCar2 = new Car2('Volksvagen', 'Germany', 2019, 200, 2.0);
console.log(addCar2);
addCar2.drive();
addCar2.info();
addCar2.increaseMaxSpeed(240);
addCar2.drive();
addCar2.changeYear(2018)
addCar2.info();
addCar2.addDriver('Top driver');
console.log(addCar2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let CinderellaArr = [
    new Cinderella('Girl0', '10', '32'),
    new Cinderella('Girl1', '11', '33'),
    new Cinderella('Girl2', '12', '34'),
    new Cinderella('Girl3', '13', '35'),
    new Cinderella('Girl4', '14', '36'),
    new Cinderella('Girl5', '15', '37'),
    new Cinderella('Girl6', '16', '38'),
    new Cinderella('Girl7', '17', '39'),
    new Cinderella('Girl8', '18', '40'),
    new Cinderella('Girl9', '19', '41')
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

let prince = new Prince('Prince', '20', '38')
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    for (let key of CinderellaArr) {
        if (key.footSize === prince.foundShoeSize) {
            console.log(`Your princess: ${key.name}`);
        }
    }
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const Princess = CinderellaArr.find((key) => key.footSize === prince.foundShoeSize);
console.log(Princess);
