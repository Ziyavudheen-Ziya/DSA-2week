class CircilarQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.start = -1;
    this.end = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.end = (this.end + 1) % this.capacity;
      this.items[this.end] = element;
      this.currentLength += 1;

      if (this.start === -1) {
        this.start = this.end;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.start];
    this.items[this.start] = null;
    this.start = (this.start + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.start = -1;
      this.end = -1;
    }

    return item;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i;
      let str = "";
      for (i = this.start; i != this.end; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

const list = new CircilarQueue(5);

list.enqueue(10);
list.enqueue(20);
list.enqueue(30);
list.enqueue(40);
list.enqueue(50);
list.enqueue(60);

list.print();

// list.dequeue();
// list.dequeue();
// list.dequeue();


