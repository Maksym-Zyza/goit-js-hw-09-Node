"use strict";

var greeter = function greeter(message) {
  return console.log(message);
}; // Для експортирования  - module.exports


module.exports = greeter;