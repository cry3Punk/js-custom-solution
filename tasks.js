//✅ Came back after almost 1 year of break
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
