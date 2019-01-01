// Generated by CoffeeScript 2.3.2
console.log("\n****************** error **********************\n");
(function () {
  
    var flag, i, len, listeners, ref;
    listeners = {};
    ref = ["a", "b"];
    for (i = 0, len = ref.length; i < len; i++) {
      flag = ref[i];
      listeners[flag] = function(event) {
        return console.log(`${flag}: ${event}`);
      };
    }
    listeners["a"]("x");
    listeners["b"]("y");
  }.call(this));
  
  
  // fixed solution
  console.log("\n****************** fixed solution **********************\n");
  
  (function () {
    
    function createfunc(flag) {
      return function(event) {
        return console.log(`${flag}: ${event}`);
      };
    }
  
    var flag, i, len, listeners, ref;
    listeners = {};
    ref = ["a", "b"];
    for (i = 0, len = ref.length; i < len; i++) {
      flag = ref[i];
      
      listeners[flag] = createfunc(flag);
    }
    listeners["a"]("x");
    listeners["b"]("y");
  }.call(this));
  
  
  /************************************************** */
  console.log("\n****************** error **********************\n");
  
  
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    // let's create 3 functions
    funcs[i] = function() {
      // and store them in funcs
      console.log("My value: " + i); // each should log its value.
    };
  }
  for (var j = 0; j < 3; j++) {
    funcs[j](); // and now let's run each one to see
  }
  
  console.log("\n****************** fixed solution **********************\n");
  
  var funcs = [];
  
  function createfunc(bbb) {
    return function() {
      console.log("My value: " + bbb);
    };
  }
  
  for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
  }
  
  for (var j = 0; j < 3; j++) {
    funcs[j](); // and now let's run each one to see
  }
  
  /************************************************** */
  
  // var add = (function () {
  //   var counter = 0;
  //   console.log("111: " + counter)
  //   return function () { counter += 1; console.log("222: " + counter); return counter}
  // })();
  
  // add();
  // add();
  // add();
  