import React, {useEffect}  from "react";
import './Home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Home (){
    // vamos criar um gancho de reação para adicionar animação subir 
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return(
       <section className="home">
            <div className="overlay"> </div>
            <video src={video} muted autoPlay loop type='video/mp4' ></video>
            
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos='fade-up' 
                    className="smallText">
                        Nossos Pacotes
                    </span>

                    <h1 data-aos='fade-up'
                    className="homeTitle">
                        Precisando de Férias!
                    </h1>

                </div>

                <div data-aos='fade-up' 
                    className="cardDiv grid"> 
                    <div className="destinationInput">
                        <label htmlFor="city">
                            Escolha seu Destino
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Digite seu destino..." />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">
                            Encontre melhor data:
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="princeInput">
                        <div className="label_total flex">
                            <label htmlFor="price"> Preço Maximo:</label>
                            <h3 className="total"> R$5000</h3>
                        </div> 
                        <div className="input flex">
                            <input type="range" max='5000' 
                            min='1000'></input>
                        </div>
                    </div>
                    
                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MAIS FILTROS</span>
                    </div>
                </div>

                <div data-aos='fade-up' 
                    className="homeFooterIcons flex">
                    <div className="rightIcons"> 
                        <FiFacebook className='icon' />  
                        <AiOutlineInstagram className='icon' /> 
                        <SiTripadvisor className='icon' /> 
                    </div>

                    <div className="leftIcons">
                        <BsListTask className='icon' />       
                        <TbApps className='icon' />       
                    </div>
                </div>
            </div>

       </section>
    );
}

export default Home;