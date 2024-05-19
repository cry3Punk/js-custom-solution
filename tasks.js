//1. ✅ Came back after almost 1 year of break 
//Took - 40min  
const doStuff = (str, k) => {
    const arr = [[]];

    //step 1
    for(let i=0, j=0, num = k;i<str.length;i++){

        if(i > num-1){
            j++;
            num += k;
            arr[j] = [];
        }

        arr[j].push(+str[i]);
    }

    //step 2
    for(let i=0;i<arr.length;i++){
        const sum = arr[i].reduce((acc, curr) => acc + curr, 0);
        arr[i] = [sum]
    }

    return arr.flat().join('')
}

let counter = 0;

const sumAssesment = (str, k) => {
   const result = doStuff(str, k);

   while(result.length > k) return sumAssesment(result, k);

   return doStuff(str, k)
}

//2. ✅ Check if Object Instance of Class
//My dumb solution which partially works
const checkIfInstanceOf = function(obj, classFunction) {
    let startingPoint = 'obj.__proto__';

    while(eval(startingPoint).constructor.name !== 'Object'){
        if(eval(startingPoint).constructor.name === classFunction.name) return true;

        startingPoint += '.__proto__'
    }

    return false;
};

//Why do we need to check proto if we'll just have same prototype for both, right?
//better approach: 
const checkIfInstanceOf = function(obj, classFunction) {
    while(obj!=null){
        if(obj.constructor === classFunction)
            return true;

        obj = Object.getPrototypeOf(obj);
    }

    return false;
};

//3. Return to leetcode after break
//Using booleans to determine palindrome

function palindrome(string) {
  // enter the codes
  let strArr = string.toLowerCase().split('');
  let newArr = string.toLowerCase().split('');
  
  strArr.reverse();
  
  let isPalindrome = false;
  
  strArr = strArr.filter(function(item){
    return /[a-z]/.test(item);
  });
  
  newArr = newArr.filter(function(item){
    return /[a-z]/.test(item);
  });
  
  let len = strArr.length;
  let end = len - 1;
  
  for(let i=0; i < len; i++){
    if(strArr[i] == newArr[end - i]){
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }
  
  return isPalindrome;
}

//custom reduce

const a = [10, 21, 13, 56];

function add(a, b) { return a + b }
function foo(a, b) { return a.concat(b) }

Array.prototype.reduce2 = function (f, result) {
  const i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
    
  for(; i < this.length; i++)
    result = f(result, this[i], i, this);
    
  return result;
};

//a taste of Curry

var obj = {
  a: 'foo',
  b: function (a) { return this.a + a; }
}

obj.foobar = curry(obj.b, 'bar');
obj.foobar()

function curry(fun,...args) {
    return function(...arg2) {
    return fun.call(this,...args,...arg2);
  }
}

//baby magpies
const child = function(bird1, bird2) {
  if (bird1===bird2) return false
  return ( getDifference(bird1, bird2) < 3 ? true : false );
}

const grandchild = function(bird1, bird2) {
  if (bird1.length===1&&bird2.length===1&&bird2!==bird1) return false
  return ( getDifference(bird1, bird2) <=4 ? true : false );
}

function getDifference(bird1,bird2) {
        let dif = 0;
    
        for(let i=0; i<bird1.length; i++)
          if(bird1.slice(i,i+1)!==bird2.slice(i,i+1)) dif++;
    
        return dif;
}

//bowling pins
const bowlingPins = function(arr){
  return "7 8 9 10\n 4 5 6 \n  2 3  \n   1   ".split`\n`.map(
  v=>v.split` `.map(v=>arr.includes(v*1)?' ':v===''?'':'I').join` `).join`\n`
}

//array helpers
Array.prototype.square=function(){
return this.map(v=>v*v)
}
Array.prototype.cube=function(){
return this.map(v=>v*v*v)
}
Array.prototype.sum=function(){
return this.reduce((a,b)=>a+b,0)
}
Array.prototype.average=function(){
return this.reduce((a,b)=>a+b,0)/this.length
}
Array.prototype.even=function(){
return this.filter(v=>v%2==0)
}
Array.prototype.odd=function(){
return this.filter(v=>v%2!==0)
}
