import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-blue-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MY BLOGS</a>
  </div>
    
 
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between" href='/'>
            Home
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='createpost'>createpost</a></li>
        <li><a href='login'>Logout</a></li>
      </ul>
    </div>
  </div>

    
    
    </>
  )
}

export default Navbar