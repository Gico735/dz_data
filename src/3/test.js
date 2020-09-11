class BinaryTree {
  constructor(value) {
    this.value = value;
    this.high = null;
    this.low = null;
  }

  find(num) {
    if (this.value === num) return this;
    if (this.value > num && this.low) return this.low.find(num);
    if (this.value < num && this.high) return this.high.find(num);
    return `соре, ${num} нет`;
  }

  add(num) {
    if (num > this.value) {
      if (this.high) return this.high.add(num);
      else this.high = new BinaryTree(num);
      return this.high;
    }
    if (this.low) return this.low.add(num);
    else this.low = new BinaryTree(num);
    return this.low;
  }

  findLower() {
    if (!this.low) return this;
    return this.low.findLower();
  }

  findHigher() {
    if (!this.high) return this;
    return this.high.findHigher();
  }

  remove(num, prevNode) {
    if (num === this.value) {
      if (!prevNode) {
        if (this.low) {
          const higher = this.low.findHigher();
          this.remove(higher.value);
          return (this.value = higher.value);
        }
      }
      prevNode.low = this.low;
      this.low = null;
      return prevNode;
    }

    if (num > this.value) return this.high.remove(num, this);
    return this.low.remove(num, this);
  }
}

function collectTree(tree, depth = 0) {
  if (!tree.low && !tree.high) {
    return { depth, value: tree.value };
  }
  let right;
  let left;
  if (tree.low) right = collectTree(tree.low, depth + 1);
  if (tree.high) left = collectTree(tree.high, depth + 1);
  return { depth, value: tree.value, left, right };
}

function drawTree(collection) {
  console.log(JSON.stringify(collection));
  const space = '          '
  
}

const tree = new BinaryTree(20);

// tree.add(20);
tree.add(10);
tree.add(15);
tree.add(50);
tree.add(30);
// tree.remove(20);
tree.find(15);
// console.log(tree);
const collectionTree = collectTree(tree);
drawTree(collectionTree);

// console.log(tree.find(123));
