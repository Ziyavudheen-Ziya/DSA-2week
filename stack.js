class Stack {
  constructor(capacity) {
    this.Stack = [];
    this.capacity = capacity;
  }

  push(value) {
    if (this.Stack.length < this.capacity) {
      this.Stack.push(value);
    } else {
      console.log("stack overflow");
    }
  }

  pop() {
    if (this.Stack.length > 0) {
      this.Stack.pop();
    }
  }

  display() {
    console.log(this.Stack);
  }
}

let stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.display();

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.display();

//// On this code we are tryed stack flow and unflow

// class Stack{

//     constructor(capacity){

//        this.stack = []
//        this.capacity = capacity
//     }

//     push(value){

//        if(this.stack.length<this.capacity){

//            this.stack.push(value)
//        }else{

//          console.log("Stack overFlow");
//        }

//     }

//     pop(){

//       if(this.stack.length>0){

//          this.stack.pop()
//       }else{

//        console.log("Stack unflowed");
//       }
//     }

//     display(){

//       console.log(this.stack);
//     }

//  }

//  let stack = new Stack(5)

//  stack.push(1)
//  stack.push(2)
//  stack.push(3)
//  stack.push(4)
//  stack.push(5)
//  stack.push(6)
//  stack.display()

//  stack.pop()
//  stack.pop()
//  stack.pop()
//  stack.pop()
//  stack.pop()
//  stack.pop()

//  stack.display()
