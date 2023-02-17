class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(){
    this.head = null;
    this.tail = 0;
  }

  add(number) {
    // your code here
    var node = new Node(number);
    var current;

    if(this.head === null) this.head = node;
    else{
      current = this.head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
    }
    this.tail++;
  }

  get(index) {
    // your code here
    var curr = this.head;
    var i = 0;
    while(curr){
      if(i==index){ return curr.value;}
      curr = curr.next;
      i++;
    }

    return ;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list)
console.log(list.get(1));
// => 5

module.exports = LinkedList;
