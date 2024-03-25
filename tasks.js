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

//3. 
