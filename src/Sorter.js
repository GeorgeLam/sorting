import React, { useEffect, useRef, useState } from 'react';

// import bubbleSort from "./BubbleSort"

const Sorter = () => {
    let [array, setArray] = useState([])

    let area = useRef(null);
    let arraySize = useRef(null);

    const updateArray = () => {
        console.log("original", array);
        console.log("Updating", arraySize.current.value);
        let ar = []
        setArray([])
        for (let i = 0; i < arraySize.current.value; i++) {
            ar.push((Math.random() * 100))
        }
        console.log(ar);
        setArray(ar);
    }



    function delay(j, ar) {
        setTimeout(function() {
            // console.log(ar)
            setArray(ar);
        }, 200 * j);
}


    const bubbleSort = (ar) => {
        console.log("rec", ar)

        for (let i = 0; i < ar.length; i++) {
            let solved = true;
            for (let j = 0; j < ar.length - i; j++) {
                if (ar[j] > ar[j + 1]) {
                    [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]]
                    solved = false;
                    // console.log(ar);
                }        
            }
                delay(i, [...ar])

            // console.log(ar);
            if (solved) {
                // setArray([...ar]);
                return;
            };
        }
        console.log("Done", ar)
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
                    <button >Insertion Sort</button>
                </div>

                <div ref={area} className="area">
                    {array.map((item, index) => (
                        <div key={index} className="shape" id={index} style={{ height: (item / 100) * 600, width: 400 / array.length }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sorter;