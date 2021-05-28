type data = number | string;

class Node {
  data: data;
  next: Node | null;


  constructor(data: data, next = null) {
    this.data = data;
    this.next = next;
  }
}


class LinkedList {
  head: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(data: data) {
    let newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.head.next = newNode.next;

    this.length += 1;
    return this.head;
  }

  insertTail(data: data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;

      this.length += 1;
      return this.head;
    };

    let current = this.head;
    while (current.next) {
      current = current.next;
    };
    current.next = newNode;

    this.length += 1;
    return current.next;
  }

  removeDupes() {
    if(!this.head) return;
    let nodeValueToCheck = this.head;
    let counter = 0;

    while(nodeValueToCheck && nodeValueToCheck.next) {
      let curr: Node | null = nodeValueToCheck;

      while(curr && curr.next) {
        if(nodeValueToCheck.data == curr.next.data) {
          if(curr.next.next) {
            curr.next = curr.next.next
            this.length -= 1;
            curr = curr.next;
          } else {
            curr.next = null;
            this.length -= 1;
          }
        }

        curr = curr.next;
      }

      nodeValueToCheck = nodeValueToCheck.next;
    }
  }
}

let list = new LinkedList;
list.insertHead(5);
list.insertHead(6);
list.insertTail(8);
list.insertTail(8);
list.insertTail(6);
list.insertTail(6);
list.insertTail(6);
console.dir(list, { depth: null, colors: true });
list.removeDupes();
console.dir(list, { depth: null, colors: true });
export { };