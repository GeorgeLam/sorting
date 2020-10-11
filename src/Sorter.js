import React, { useEffect, useRef, useState } from 'react';

// import bubbleSort from "./BubbleSort"

const Sorter = () => {
    let [sortInterval, setSortInterval] = useState(400);
    let [array, setArray] = useState([4, 2, 6, 4, 8, 1, 3, 7])

    let area = useRef(null);
    let arraySize = useRef(null);

    const updateArray = () => {
        
        console.log("original", array);
        console.log("Updating", arraySize.current.value);
        let ar = []
        setArray([])
        for (let i = 0; i < arraySize.current.value; i++) {
            if(document.querySelector(`#shape${i}`)){
            document.querySelector(`#shape${i}`).style.backgroundColor = "#2196f3";
            }
            ar.push((Math.random() * 100))
        }
        console.log(ar);
        setArray(ar);
    }

    const colorSorted = (n) => {
        //  document.querySelectorAll(".shape").forEach(shape=>{
        //             shape.style.backgroundColor = "#2196f3";
        //         })
        document.querySelector(`#shape${n}`).style.backgroundColor = "#00fcab";
    }

    const highlight = (n) => {
        if(n>0){
         document.querySelector(`#shape${n-1}`).style.backgroundColor = "#00fcab";
                }
        document.querySelector(`#shape${n}`).style.backgroundColor = "red";
    }

    function delay(j, ar) {
        setTimeout(function() {
            // if(j<0){
            //     document.querySelectorAll(".shape").forEach(shape=>{
            //         shape.style.backgroundColor = "#00fcab";
            //     })
            // }
            // if(ar.length-j-1 >= 0){
                if(j>=0){
                // colorSorted(ar.length-j-1);
                    // if(j>1){
                    // colorSorted(j-1)
                    // }
                highlight(j)
            }
            setArray(ar);
        }, sortInterval * j);
    }


    const bubbleSort = (ar) => {
        for (let i = 0; i < ar.length; i++) {
            let sorted = true;

            for (let j = 0; j < ar.length - i; j++) {
                if (ar[j] > ar[j + 1]) {
                    [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]]
                    sorted = false;
                }
            }
            if(sorted){
                console.log("Done now!");
                // delay(0, [...ar])
                //  return;
                }

            delay(i, [...ar])
        }
        console.log("Done", ar)
        delay(ar.length+1, [...ar])
    }

    const insertionSort = (arr) => {
        delay(0, [...arr])
        for (let i = 1; i < arr.length; i++){
            // highlight(i)

            let temp = arr[i]
            let j = i-1

            while(temp < arr[j] && j >= 0){
                // colorSorted(i);
                arr[j+1] = arr[j]
                // delay(j, [...arr])

                j--
            }
            // UNHIGHLIGHT(J+1)
            arr[j+1] = temp;
            delay(i, [...arr])
        }
        delay(arr.length-1, [...arr])
        console.log(arr);
    }

    return (
        <div>
            <div className="container">
                <div className="controls">
                    <input type="text" placeholder="Array size" ref={arraySize} />
                    <button onClick={updateArray}>Update</button>
                </div>
                <div className="controls">
                    <button onClick={() => { bubbleSort(array) }}>Bubble Sort</button>
                    <button onClick={() => { insertionSort(array) }}>Insertion Sort</button>
                </div>

                <div ref={area} className="area">
                    {array.map((item, index) => (
                        <div key={index} className="shape" id={`shape${index}`} style={{ height: (item / 100) * 600, width: 400 / array.length }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sorter;