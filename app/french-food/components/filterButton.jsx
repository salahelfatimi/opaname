'use client'

import { useState } from "react"

export default function FilterButton(){
    const [selectFilter,setSelectFilter]=useState(1)
    return (
        <div className=" flex gap-6 flex-col lg:flex-row justify-center items-center w-full container  ">
            <button onClick={()=>(setSelectFilter(1))} className={`transition-all w-full duration-700 py-2 px-4 border-4  rounded-full font-bold text-white border-primary ${selectFilter===1?' bg-primary ':'bg-secondary '} `}>Kebab Simples 🥙</button>
            <button onClick={()=>(setSelectFilter(2))} className={`transition-all w-full duration-700  py-2 px-4 border-4  rounded-full font-bold text-white border-primary ${selectFilter===2?' bg-primary ':'bg-secondary '} `}>Kebab Gourmands 🥙</button>
            <button onClick={()=>(setSelectFilter(4))} className={`transition-all w-full duration-700 py-2 px-4 border-4  rounded-full font-bold text-white border-primary ${selectFilter===4?' bg-primary ':'bg-secondary '} `}>Accompagnements</button>
        </div>
    )
}