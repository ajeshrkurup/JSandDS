
/*---------------------------------------------------------------------------------*/
/* Implementing STACK Data Structure */
/*---------------------------------------------------------------------------------*/

//Stack() as a function constructor
function Stack() {
    var items = [];
    
    //Adding elements to stack 
    this.push = function(element) {
        items.push(element);
    }
    
    //Removing elemenst from stack
    this.pop = function() {
        return items.pop();
    }
    
    //Checking last added value / top of STACK
    this.peek = function() {
        return (items[items.length-1]);
    }
    
    //checking length of STACK
    this.lenght = function() {
        return items.length;
    }
    
    //checking whether the STACK is empty or not
    this.isEmpty = function() {
        return (items.length == 0);
    }
    
    //clearing all elements from STACK
    this.clearAll = function() {
        items = [];
    }
    
    //print the STACK elements to console 
    this.print = function() {
        console.log(items.toString());
    }
}

/*---------------------------------------------------------------------------------*/
/* Test Code for STACK Data Structure */
/*---------------------------------------------------------------------------------*/
/*

var myStack = new Stack();
myStack.print();
var value = myStack.isEmpty();
console.log("Stack is Empty ? : " + value );

myStack.push("A");
myStack.print();

var last = myStack.peek();
console.log(last);
myStack.push("B");
myStack.print();

var last = myStack.peek();
console.log(last);

myStack.push("BCD");
myStack.print();

var last = myStack.peek();
console.log(last);

myStack.pop();
myStack.print();

var last = myStack.peek();
console.log(last);

*/

/*---------------------------------------------------------------------------------*/
/* Program to Convert Decimal to Binary */
/*---------------------------------------------------------------------------------*/

function decimalToBinary(decimal) {
    var remStack = new Stack();
    var rem;
    var binary = "";
    
    while(decimal > 0) {
        rem = decimal%2;
        remStack.push(rem);
        decimal = Math.floor(decimal/2);
    }
    
    while(!remStack.isEmpty()) {
        binary = binary + remStack.pop();
    }
    
    return binary;
}

