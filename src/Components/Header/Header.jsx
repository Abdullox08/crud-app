import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='bg-success p-3'>
       <Link className='nav-link' to={'/'}><h3 className='text-white'>CRUD APP</h3></Link> 
    </div>
  )
}
