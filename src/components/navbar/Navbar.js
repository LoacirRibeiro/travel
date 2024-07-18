import React, { useState } from "react";
import './Navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar (){
    const [active, setActive ] = useState('navBar')
    // função para alternar a barra de navegação
    const showNav = () =>{
    setActive('navBar activeNavbar')
    }
    // função para remocer a barra de navegação
    const removeNavbar = () =>{
    setActive('navBar')
    }


    return(
       <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href='#' className="logo flex">
                        <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
                    </a>                    
                </div>

                 <div className={active}>  
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href='#' className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href='#' className="navLink">Pacotes</a>
                            
                        </li>

                        <li className="navItem">
                        <a href='#' className="navLink">Comprar</a>
                           
                        </li>

                        <li className="navItem">
                        <a href='#' className="navLink">Sobre</a>
                            
                        </li>

                        <li className="navItem">
                        <a href='#' className="navLink">Páginas</a>
                        </li>

                        <li className="navItem">
                        <a href='#' className="navLink">Notícias</a>
                        </li>  

                        <li className="navItem">
                        <a href='#' className="navLink">Contatos </a>
                        </li>

                        <button className="btn">
                            <a href='#'>AGENDE AGORA.</a>
                        </button>        
                    </ul>
                  
                    <div onClick={removeNavbar} 
                    className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                                    
                </div>

                <div onClick={showNav} className="toggleNavbar">
                        <TbGridDots className="icon" />
                </div>

            </header>
       </section>
    );
}

export default Navbar;