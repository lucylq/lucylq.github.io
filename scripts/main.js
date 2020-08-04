let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let theoryButton = document.querySelector('#theoryButton');
let practiseButton = document.querySelector('#practiseButton');
let motivationButton = document.querySelector('#motivationButton');
var name = " ";



var theory = ['Complexity', 'Recursion', 'ADTs', 'Binary Search Trees', 'Balanced Search Trees', 'Splay Trees', 'AVL Trees', '234 Trees', 'Red Black Trees', 'Graphs', 'Graph Properties', 'Graph Representations', 'Graph algorithms', 'Breadth First Search', 'Depth First Search', 'Minimum Spanning Trees', "Kruskal's algorithm", "Prim's algorithm", "Dijkstra's Algorithm", 'Hashing', 'Collision Resolution', 'Heaps', 'Heaps: fixUp, fixDown', 'Tries', 'Sorting', 'Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Shell Sort', 'Bogo Sort', 'Vanilla Quick Sort', 'Median of 3 Quick Sort', 'Selection Sort', 'String Matching', 'Knuth-Morris-Pratt String Matching', 'Boyer-Moore String Matching', 'Huffman Compression'];

var practise = ['Debugging (GDB)', 'Makefiles', 'Random numbers', 'Performance analysis', 'Higher order functions'];

var motivation = ['Work hard', 'Keep it up', 'Good work', 'Doing well', 'Take a break', 'You can do it', 'Drink some water', '20min more', 'Stay awake', 'Comp is great', 'Aim for HD', 'This topic is so exciting'];

var theory_length = theory.length;
var practise_length = practise.length;
var motivation_length = motivation.length;

myButton.onclick = function() {
  setUserName();
}

theoryButton.onclick = function() {
  myHeading.textContent = chooseMsg(0);
}

practiseButton.onclick = function() {
  myHeading.textContent = chooseMsg(1);
}

motivationButton.onclick = function() {
  if (name == " ") {
    name = prompt('Please enter your name.');
  }
  myHeading.textContent = chooseMsg(2) + ', ' + name;
}

function chooseMsg(type) {
  var rand = Math.floor(Math.random()*1000);
  if (type == 0) {
    return theory[rand%theory_length];
  }
  else if (type == 1) {
    return practise[rand%practise_length];
  } else {
    return motivation[rand%motivation_length];
  }
}

