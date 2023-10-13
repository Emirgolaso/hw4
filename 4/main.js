const array=[1,2,2,3,4,55,6,8,9,45];
 const array2=[];

 function copyEvenNumber(array,array2){
    for (let i = 0; i < array.length; i++) {
      if (array[i]%2===0) {
        array2.push(array[i]);
        
      }
        
    }
 }

 copyEvenNumber(array,array2);

 console.log(array2);
