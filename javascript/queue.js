class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of queue if not full
  // if full throw error
  push(item) {

  }

  // remove item from top of queue and return it
  pop() {

  }

  // return item at top of queue without removing it
  peek() {

  }

  // return true if queue is empty, otherwise false
  isEmpty() {

  }

  // return true if queue is full, otherwise false
  isFull() {

  }

  // return number of items in queue
  size() {

  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the top
  search(target) {

  }

  // print contents of queue: do not return the queue itself!
  print() {
    
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Queue;
