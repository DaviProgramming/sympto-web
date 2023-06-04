import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import banner1 from '../assets/doctor-1920X1080-5sazd9c32660wknp.jpeg'
import doctor1 from '../assets/doctor1.png'

const Home = (props) => {
  console.log(props)
  return (
    <>
      <Navbar />

      <section className='container home'>
        <div className="hero">
          <img src={banner1} alt="hero" />
       
        </div>

        <div className="find-doctor">

          <div className="text">
            <span className="head-text">Encontre um médico agora mesmo</span>
            <div className="body-text">oferecemos aos usuários a facilidade de encontrar e agendar consultas com profissionais médicos altamente qualificados. Entendemos a importância de encontrar o médico adequado para suas necessidades de saúde, e nosso objetivo é simplificar esse processo para você.</div>
          </div>
          <div className="image">
            <img src={doctor1} alt="" />
          </div>

        </div>



      </section>

      <Footer />

    </>
  )
}

export default Home