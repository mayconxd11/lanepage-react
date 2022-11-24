import React from 'react';
import './Header.css';

function Header(){
  return(
    <>
      <header>
        <div>
          <nav>
            <h2>Home</h2>
            <ul>
              <li> <a target="_self" href="#"> Home </a> </li>
              <li> <a target="_self" href="#"> Curriculo </a> </li>
              <li> <a target="_self" href="#"> Contatos </a> </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export { Header };