import React from 'react'
import NavPart2 from './NavPart2'

const Header = () => {
  return (
    <nav className='bg-emerald-900 flex px-10 py-5 items-center justify-between'>
        <h2 className='text-2xl'>Rahul Kashyap</h2>
        <NavPart2 />  
        {/* Component NavPart2 inside Header compent which will pass to app.jsx which will be passed to main.jsx which then will pass to index.html */}
    </nav>
  )
}

export default Header