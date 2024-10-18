import React from 'react'
import Tick from '../assets/check-mark.png'
import Notick from '../assets/notic.png'
import Delete from '../assets/trash.png'
import cic from '../assets/circ.png'

const Todoitems = ({text , id , isComplete, deleteTodo,toggle}) => {
  return (
    <div className=' flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? Tick : cic} alt="" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through " : " "}`}> {text} </p>
        </div>
        <img className='w-5 cursor-pointer'src={Delete} onClick={()=>{deleteTodo(id)}} alt="" />

    </div>
  )
}

export default Todoitems