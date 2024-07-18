/// Queue with Array

// class Queue {
//   constructor(capacity) {
//     this.queue = [];
//     this.capacity = capacity;
//   }

//   enqueue(element) {
//     if (this.queue.length < this.capacity) {
//       this.queue.push(element);
//     }
//   }

//   dequeue() {
//     if (this.queue.length > 0) {
//       this.queue.shift();
//     }
//   }


//   print(){

//     console.log(this.queue);
//   }
// }


// let queue = new Queue(5)

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)

// queue.print()

// queue.dequeue()
// queue.print()



// Queue With Object

class Queue{
    constructor(){
         this.items = {}
         this.start = 0
         this.end = 0
}
    enqueue(element){
   this.items[this.end] = element
     this.end++;
    }
    dequeue(){
      delete this.items[this.start]
        this.start++;
    }
    display(){
       console.log(this.items);
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()
queue.dequeue()
queue.dequeue()

queue.display()
