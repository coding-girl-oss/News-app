import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-mono h-[60px]  bg-pink-400 text-pink-900 px-4'>
      <div className='flex items-center'>
        <h1 className='text-4xl font-bold'>NewsHub</h1>
        <img 
          src='https://cdn-icons-png.flaticon.com/128/12709/12709566.png' 
          alt="logo" 
          className='w-8 h-8 ml-2'
        />
      </div>
      <div className="dropdown dropdown-hover">
        <div 
          tabIndex={0} 
          role="button" 
          className="btn bg-pink-400 text-pink-900 text-xl font-bold px-2 hover:bg-pink-500 h-2 m-1">
          Categories
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-pink-200 rounded-box z-[1] w-52 p-2">
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/business'>Business</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/entertainment'>Entertainment</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/'>General</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/health'>Health</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/sports'>Sports</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/science'>Science</Link></li>
          <li className='hover:bg-pink-300 rounded-lg'><Link to='/technology'>Technology</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

