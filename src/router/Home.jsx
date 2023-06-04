import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


import banner1 from '../assets/doctor-1920X1080-5sazd9c32660wknp.jpeg'
import doctor1 from '../assets/doctor1.png'
import consulta from '../assets/medical-exam-1254900235-4d04bce5d4c84ca4a4d44c2a8ad13843.jpg';

import Card from '../components/Card'

const Home = (props) => {
  console.log(props)
 
  return (
    <>
   
      <Navbar />

      

      <section className='container home'>
        <div className="hero">
          <img src={banner1} alt="hero" />

        </div>

        <div className="content find-doctor">

          <div className="text">
            <span className="head-text">Encontre um médico agora mesmo</span>
            <div className="body-text">oferecemos aos usuários a facilidade de encontrar e agendar consultas com profissionais médicos altamente qualificados. Entendemos a importância de encontrar o médico adequado para suas necessidades de saúde, e nosso objetivo é simplificar esse processo para você.</div>
          </div>
          <div className="image">
            <img src={doctor1} alt="" />
          </div>

        </div>

        <div className="content make-appoinment">

          <div className="text">
            <span className="head-text">Agende uma consulta rapidamente </span>
            <div className="body-text">
              Entendemos que seu tempo é valioso e que encontrar a melhor data e horário para uma consulta médica pode ser um desafio. Com nossa plataforma de agendamento online, você pode dizer adeus às longas esperas por uma ligação telefônica ou a dificuldade de marcar consultas em horários que se encaixem em sua agenda.</div>
          </div>
          <div className="image">
            <img src={consulta} alt="" />
          </div>

        </div>


        <div className="services">

          <div className="text">
            <div className="head-text">O que oferecemos?</div>
            <div className="body-text">Em nossa plataforma, oferecemos uma variedade de planos para atender às suas necessidades de cuidados com a saúde. Entendemos que cada pessoa tem requisitos diferentes quando se trata de consultas médicas, agendamentos e pesquisa de doenças. </div>
          </div>

          <div className="cards">
            <Card text={"Consulta"} textBody={"qualquer texto"}/>
            <Card text={"Agendamento"} textBody={"qualquer texto"}/>
            <Card text={"Pesquisa"} textBody={"qualquer texto"}/>
          </div>

          

        </div>


      </section>

      <Footer />

    </>
  )
}

export default Home