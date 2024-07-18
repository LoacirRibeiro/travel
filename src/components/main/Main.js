import React, {useEffect} from "react";
import './Main.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

// import icons
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import img from "../../Assets/img.jpeg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zelandia",
    grade: "CULTURAL RELAX",
    fees: "R$700",
    description:
      "o ápice do romance, Bora Bora é um dos melhores destinos de viagem do mundo. este lugar é conhecido por suas estadias luxuosas e atividades de aventura.",
  },

    {
      id: 2,
      imgSrc: img2,
      destTitle: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
      fees: "R$600",
      description:
        "Picchu é uma montanha no Peru que se eleva sobre Machu Picchu, a chamada cidade perdida dos Incas. este lugar é popular entre os turistas porque o nascer do sol no Portão do Sol é simplesmente espetacular.",
    },

    {
      id: 3,
      imgSrc: img3,
      destTitle: "Grande Barreira de Coral",
      location: "Austrália",
      grade: "CULTURAL RELAX",
      fees: "R$700",
      description:
        'um dos presentes naturais mais notáveis ​​da Austrália é a Grande Barreira de Corais. A marca registrada deste lugar é "pródigo" e "beleza"; é sempre interessante estar neste lugar',
    },

    {
      id: 4,
      imgSrc: img4,
      destTitle: "Cappadocia",
      location: "Turkey",
      grade: "CULTURAL RELAX",
      fees: "R$800",
      description:
        "De acordo com o Ranking Mundial de Turismo, 45 milhões de pessoas visitam a Turquia todos os anos, e dessas cerca de 2 milhões vêm visitar a Capadócia. este lugar é conhecido por suas estadias luxuosas e atividades de aventura.",
    },

    {
      id: 5,
      imgSrc: img5,
      destTitle: "Guanajuato",
      location: "México",
      grade: "CULTURAL RELAX",
      fees: "R$1100",
      description:
        "a city in central Mexico , Guanajuato is known for its history of silver mining and colonial arcchitecture. the house in the city are very attractively painted with most bright colors available. Always welcomo.",
    },

    {
      id: 6,
      imgSrc: img6,
      destTitle: "Cinque terre",
      location: "Italy",
      grade: "CULTURAL RELAX",
      fees: "R$840",
      description:
        "os tons vibrantes da casa são a sua referência e explicam a beleza deste local. Além disso, se você é um fã de comida e adora frutos do mar, ficará entusiasmado com a escolha que está prestes a chegar aqui. feliz explorando boa comida!",
    },

    {
      id: 7,
      imgSrc: img7,
      destTitle: "Verruga de Angkor",
      location: "Cambodia",
      grade: "CULTURAL RELAX",
      fees: "R$790",
      description:
        "Angkot wat represents the entire range of khmer art from the 9th to the 15th century. this temple is considered the heart and soul of Cambodia. Thios place is hnown for its luxutious stays and adventurous activities.",
    },

    {
      id: 8,
      imgSrc: img8,
      destTitle: "Taj Mahal",
      location: "India",
      grade: "CULTURAL RELAX",
      fees: "R$900",
      description:
        "Um imenso mausoléu de mármore branco, construído em Agra pelo imperador Mughal Shah Jahan em memória de sua esposa Mumtaz, o monumento é de uma beleza deslumbrante. este lugar é conhecido por seus hotéis luxuosos e atividades de aventura.",
    },

    {
      id: 9,
      imgSrc: img9,
      destTitle: "Ilha de Bali",
      location: "Indonesia",
      grade: "CULTURAL RELAX",
      fees: "R$500",
      description:
        "Bali é uma ilha da Indonésia e um dos melhores destinos de férias do arquipélago da Indonésia. bali é conhecida por sua natureza vulcânica.",
    },
]

function Main() {
  // vamos criar um gancho de reação para adicionar animação subir 
  useEffect(() => {
    Aos.init({duration: 2000})
},[])



  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Destinos mais visitados</h3>
      </div>

      <div className="secContent grid">
        {/* 
            então pessoal, aqui vamos usar o método de array de alta ordem (mapa)
            para fazer isso, usaremos uma lista de objetos em um array. 
            vou criar dados nomeados no array e a partir desse array weshall .map() 
            para buscar cada destino de uma vez. espero que isso faça 
            sentido para você (mapa) */}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
                data-aos='fade-up'
                className="singleDestination">
                {/* aqui ele retornará um único id do array do mapa */}
                <div className="imageDiv">
                  <img src={imgSrc} alt="destTitle" />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5> {fees} </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  
                  <button className="btn flex">
                    DETALHES <HiOutlineClipboardCheck className="icon" />
                  </button>
                 </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Main;
