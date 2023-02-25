class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  length() {
    return this.top;
  }

  peak() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.data.length == 0;
  }

  pop() {
    return this.data.pop();
  }

  print() {
    console.log(this.data);
  }
}

var stackFam = new Stack();

console.log(stackFam);

stackFam.push('Adolfo');
stackFam.push('Liz');
stackFam.push('Natalie');
stackFam.pop();
stackFam.push('AJ');

console.log(stackFam.length());
console.log(stackFam.peak());
console.log(stackFam);



/*
Class: Structure that contains Properties & Methods = common to all objects of one type.

Data Structure: a particular way that data is stored so that it can be used efficiently.

QUEUE is a First In, First Out (FIFO) accessed collection.

Stack/Array/QUEUE are all linear data structures

STACK is Last In, First Out (LIFO)
Stack: ADD new items to the END of the collection 
       REMOVE items from the END of the collection
*/

// Exercise #1 
// let result = 0;
// function add(num) {
//   // add result + num
// }

// function subtract(num) {
//   // subtract result + num
// }

// function clear() {
//   // rest result to 0
// }

// function print(result) {
//   // console.log(result)
// }



