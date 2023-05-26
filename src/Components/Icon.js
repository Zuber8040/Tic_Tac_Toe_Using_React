import React from 'react'
import {FaTimes,FaPen,FaRegCircle } from 'react-icons/fa';


// we are destructing this 
const Icon = ({name})=>{
   switch (name) {
    case 'circle':
        return <FaRegCircle className='icon'/>
        
    case 'cross':
        return <FaTimes className='icon'/>
    default:
        return <FaPen className='icon'/>
        
   }
}
export default Icon;

/*

 switch (name) {
        case 'circle':
            return <FaRegCircle className='icons'/>
            
        case 'cross':
            return <FaTimes className='icons'/>

        default:
            return <FaPen className='icons'/>
            break;
    }

*/