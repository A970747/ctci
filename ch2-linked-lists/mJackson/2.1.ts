type data = number | string;

class Node {
  data: data;
  next: Node | null;


  constructor(data: data, next = null) {
    this.next = next;
    this.data = data;
  }

}


class LinkedList {
  head: Node | null

  constructor() {
    this.head = null;
  }

  insertHead(data: data): Node | null {
    let newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    return this.head;
  }

  insertTail(data: data): Node | null {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    };

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    };
    current.next = newNode;

    return this.head;
  }
}

let list = new LinkedList;
export { };