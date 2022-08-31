// const {EventEmitter} = require ('events');

// const myEventEmitter = new EventEmitter();

// // fungsi yg akan dijalankan ketika event dijalankan

// const makeCoffee  = ({name}) => {
//     console.log (`Kopi ${name} telah dibuat!`);
// };
// const makeBill  = ({price}) => {
//     console.log (`Bill sebesar ${price} telah dibuat!`);
// };

// // mendaftarkan fungsi makeCoffe sebagai listener event coffee-order
// myEventEmitter.on('coffe-order', makeCoffee);
// myEventEmitter.on('coffe-order', makeBill);

// // memicu event 'coffee-order' terjadi
// myEventEmitter.emit('coffe-order', {name: 'Americano', price: 15000});

const {EventEmitter} = require ('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

const myEmitter = new EventEmitter();
myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'Dimas');




