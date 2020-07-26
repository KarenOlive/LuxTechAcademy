//First Assessment
console.log(0.1 + 0.2); //0.3 rounded figure
console.log(0.1 + 0.2 == 0.3); //false
console.log("0 || 1 = "+(0 || 1)); // 0 || 1 = 1
console.log("1 || 2 = "+(1 || 2)); //  1 || 2 = 1
                   
console.log("0 && 1 = "+(0 && 1)); // 0 && 1 = 0
console.log("1 && 2 = "+(1 && 2)); ///1 && 2 = 2


//Second Assessment

let users =["Liam", "Carlton", "Rose", "Sumayya"];

users.slice().reverse()
	.forEach(function(item) {
			console.log(item);
        });
        
//Anonymous functions
var x = function (a, b) {return a * b};
var z = x(4, 3);
console.log(z);

//Closures
function greetCustomer() {
    const customerName = "anchal";
    function greetingMsg() {
      console.log("Hi! " + customerName);
    }
    return greetingMsg;
  }
  
  const callGreetCustomer = greetCustomer();
  callGreetCustomer(); // output – Hi! anchal