"use client"

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Counter({size}:{size:string}) {
    const [counter , setCounter] = useState(1)

    const countLess = ()=>{
        if(counter > 1){
            setCounter( counter-1)
        }
    }
    return (
        <div className="flex items-center justify-center mx-2">
            <h3 className={`${size == "sm" ? "text-sm font-semibold text-gray-500 ":'text-xl font-bold mx-2'}`}>Quantity:</h3>
            <button className={` ${counter == 1 && "bg-gray-500"} ${size == "sm" ? "mx-2 h-8 w-8 flex items-center justify-center text-white hover:bg-blue-600/80 bg-blue-600 border-0 focus:outline-none hover:bg-blackish rounded": "flex gap-2 items-center ml-auto h-[40px] text-white hover:bg-blue-600/80 bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blackishnpm rounded"}`}
                 onClick={countLess}
            >
                <FaMinus />
            </button>
            <div className='text-x font-bold text-black text-center flex-grow'>
                {counter}
            </div>
            <button className={`${size == "sm"? "mx-2 h-8 w-8 flex items-center justify-center text-white hover:bg-blue-600/80 bg-blue-600 border-0 focus:outline-none hover:bg-blackish rounded": "flex gap-2 items-center ml-auto h-[40px] text-white hover:bg-blue-600/80 bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blackishnpm rounded"}`}
                onClick={()=> setCounter(counter+1)}
            >
                <FaPlus />
            </button>
        </div>
    )
}

export default Counter
