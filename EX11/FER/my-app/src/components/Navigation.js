// import React from "react";
// import "./Navigation.css"

// export default function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <div className="Header">
//           <div className="headerMenu">
//             <li>
//               <a className="active" href="#home">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#news">News</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </div>
//         </div>
//       </ul>
//     </nav>
//   );
// }

import React, {useContext}from 'react';
import { ThemeContext } from './ThemeContext';
import './Navigation.css';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='Header'>
      <nav className='headerMenu' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul className='headerMenu-ul'>
              <li><a className='active' href='#home'>Home</a></li>
              <li><a href='#news'>News</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
</ul>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn">
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
      )
    }
    
