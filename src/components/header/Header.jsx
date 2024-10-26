import "../header/header.css"
import React from 'react'
import { headItem } from '../../static'
import { IoSearch } from "react-icons/io5";

const Header = () => {

    // render link start 
    const renderLINK = headItem?.map((item) =>(
        <li className={item.class} key={item.id}>{item.title}</li>
    ))
    // render link end 



  return (
    <header>
       <div className="container">
            <nav>
                <div className="navbar__wrapper">
                    <div className='navLinks'>
                        <h1><a href="index.html">SAMSUNG</a></h1>
                        <ul>
                            {renderLINK}
                            
                        </ul>
                    </div>
                    <div className="navSearch">
                        <button className="callCenter">Qo'llab-quvvatlash</button>
                        <button className="callSearch"><IoSearch /></button>
                    </div>
                </div>
            </nav>
       </div>
    </header>
    
  )
}


export default Header