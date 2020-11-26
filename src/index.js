// const message = 'Hello Node!'
// console.log(message);

// Експорт из файла  - module.exports (module.exports = greeter;)
// Импорт в файл - const greeter = require('./greeter')
const greeter = require('./greeter')
greeter('Hello friends!')

// Есть два вида експорта - именнованиий и по дефолту
// Named export
// Default export

// NPM создание пакетов - TERMINAL: npm init --yes
// Хранит служебную инф. о проекте
// Формат .json - для передачи между сервером и бекендом
// Запуск скриптов - npm run hello, npm start
// Запуск  программ - npm i react; npm install uuid

// Получение уникального id через библиотеку:
const uuid = require('uuid');

function sayHello() {
    const id = uuid.v4();
    console.log('id: ', id);
 }

sayHello()

// Путь2:
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// console.log(uuidv4());

//  babel - транспаррер - преобразует современний код в старий, которий поддерживается в Node
// Для установки идем по инструкции
// npm run build - для запуска babel - преоборазования синтаксиса
