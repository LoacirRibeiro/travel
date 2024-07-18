import React, {useEffect} from "react";
import './Footer.css';
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import{MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillInstagram} from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer (){
    // vamos criar um gancho de reação para adicionar animação subir 
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small>MANTENHA CONTATO</small>
                        <h2>viaje conosco</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' type='text' placeholder='E-mail'/>
                        <button data-aos='fade-up' className="btn flex" type='submit'>
                            ENVIAR <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href='#' className="logo flex">
                                <MdOutlineTravelExplore 
                                className='icon' /> Travel.
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            A dor em si é muito importante, o adipiscamento será seguido, 
                            mas acontecerá ao mesmo tempo que um grande trabalho e dor. 
                            Para chegar aos mínimos detalhes, ninguém se exercita em nenhum trabalho, 
                            exceto para obter algum benefício dele. Não fique bravo com a dor 
                            na repreensão no prazer que ele quer ser um fio de cabelo da dor na 
                            esperança de que não haja reprodução. 
                            A menos que sejam cegados pela luxúria, eles não saem; 
                            são culpados aqueles que abandonam seus deveres e abrandam seus corações, 
                            isso é labuta.
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* grupo um     */}
                        <div data-aos='fade-up'
                        data-aos-duration='4000'
                        className="linkGroup">
                            <spam className='groupTitle'>
                                NOSSA AGÊNCIA
                            </spam>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Serviços
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Seguro
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agência
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Turismo
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Pagamento
                            </li>
                        </div>

                        {/* grupo dois     */}
                        <div data-aos='fade-up'
                        
                        className="linkGroup">
                            <spam className='groupTitle'>
                                PARCEIROS
                            </spam>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Reservas
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Aluguel de carros
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                mundo dos albergues
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>

                        {/* grupo três     */}
                        <div data-aos='fade-up'
                        
                        className="linkGroup">
                            <spam className='groupTitle'>
                                ÚLTIMO MINUTO
                            </spam>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Londres
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Califórnia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Indonésia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europa
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Oceania
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>MELHOR SITE DE VIAGENS</small>
                        <small>COPYRIGHT RESERVED - LOATECH 2024</small>
                    </div>

                </div>
            </div>
        </section>
    );  
}

export default Footer;