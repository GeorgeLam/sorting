// import React, {useState} from "react";
const bubbleSort = (array) => {
    // let [array, setArray] = useState(inputArray)

       console.log("Hi!!") 
       console.log("rec", array) 

    for(let i = 0; i < array.length; i++){
        let solved = true;
        for(let j = 0; j < array.length - i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
                solved = false;
            }
        }
        console.log(array);
        // setArray(array);
        if(solved) return array;
    }

}



export default bubbleSort