let input;

function reset() {
  d3.selectAll('svg').remove();
}

function treeAndArray() {
  reset();
  let inputText = document.getElementById("array-input")
  document.getElementById('visual-title').innerHTML = "Binary Tree And Array";
  if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      createBinaryTreeAndArr(input)
  }
}

function heapify() {
  reset();
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    makeHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById('visual-title').innerHTML = "Max-Heap Binary Tree And Array";
  }
}

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  let tree = new Tree();
  tree.createBinaryTree(input);
  createArray(arr, 2, 30, 50, 50);
}

function createBinarySearchTree() {
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    reset();
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    document.getElementById('visual-title').innerHTML = "Binary Search Tree";
    let tree = new Tree();
    tree.createBinarySearchTree(input);
  }
}
input = [];
let inputTest = document.getElementById("array-input")
inputTest.value = input;
createBinaryTreeAndArr(input);