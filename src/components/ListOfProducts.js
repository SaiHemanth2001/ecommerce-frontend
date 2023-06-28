import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListOfProducts = () => {
    const navigate= useNavigate()
    const handler = (e)=>{
        e.preventDefault();
       localStorage.removeItem("jwt")
       navigate('/')      
    }

  return (
    <div className='left'>
    <span><a className='btn btn-primary' onClick={handler}>Sign Out</a></span>
    </div>
    
  )
}

export default ListOfProducts