import React from "react";

import Carousel from "../components/Caroulsels/CarouselDoencas";
import Navbar from "../components/Navbar";
import MedicoCard from "../components/cards/MedicoCard";
import DoencaCard from "../components/cards/DoencaCard";

import imageUser from "../assets/james-person-1.jpg";
import sendLogin from "../system/sendLogin";

import {
  faHouse,
  faClipboardCheck,
  faUserDoctor,
  faSearch,
  faPlus,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const UserHome = (props) => {
  const [page, setPage] = useState("inicio");

  const chanceChoiceMenu = {
    handler(button){

      this.removeAtivado();
      this.adicionaAtivado(button);

    },
    removeAtivado(){

      let choiceAtivada = document.querySelector('.choice.ativado');

      if(choiceAtivada!= null){
        choiceAtivada.classList.remove('ativado');
      }

    },

    adicionaAtivado(button){

      if(!button.classList.contains('ativado')){
        button.classList.add('ativado');
      }

    }
  }

  const centerContent = (page) => {

    if (page == "inicio") {
      return (
        <div className="content inicio">
          <div className="header">
            <div className="title">Olá, {sendLogin.data.usuario}</div>

            <div className="actions">
              <button type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <div className="nova-consulta">
                <FontAwesomeIcon icon={faLaptopMedical} />
                Nova consulta
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="middle-doencas">
              <Carousel />
            </div>
          

            <div className="middle-historicos">
              <div className="cards-content">
                <div className="card">
                  <div className="card-content">Historico</div>
                </div>
                <div className="card">
                  <div className="card-content">Historico</div>
                </div>
                <div className="card">
                  <div className="card-content">Historico</div>
                </div>
                <div className="card">
                  <div className="card-content">Historico</div>
                </div>
              </div>
            </div>

            <div className="middle-medicos">
              <div className="cards-content">

              <MedicoCard imagem={'https://www.nit.pt/wp-content/uploads/2020/10/66d5bec666c0d072dadac73d93668139.jpg'} nome='Doctor House' especialidade='Sabe tudo' />
              <MedicoCard imagem={'https://www.nit.pt/wp-content/uploads/2020/10/66d5bec666c0d072dadac73d93668139.jpg'} nome='Doctor House' especialidade='Sabe tudo' />
              <MedicoCard imagem={'https://www.nit.pt/wp-content/uploads/2020/10/66d5bec666c0d072dadac73d93668139.jpg'} nome='Doctor House' especialidade='Sabe tudo' />

              </div>
            </div>
          </div>
        </div>
      );
    } else if (page == "historico") {
      return (
        <div className="content">
          <div className="title">Historico</div>
        </div>
      );
    } else if (page == "medicos") {
      return (
        <div className="content">
          <div className="title">Médicos</div>
        </div>
      );
    }
  };


  if(props.logado != "false"){


  return (
    <>
      <Navbar props={props} />
      <section className="container user-home">
        <div className="section-content user-home">
          <div className="user-info">
            <div className="content">
             

              <div className="choices">
                <div
                  className="choice inicio ativado"
                  onClick={(e) => {
                    setPage("inicio");
                    chanceChoiceMenu.handler(e.target);
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} /> 
                </div>

                <div
                  className="choice historico"
                  onClick={(e) => {
                    setPage("historico");
                    chanceChoiceMenu.handler(e.target);

                  }}
                >
                  <FontAwesomeIcon icon={faClipboardCheck} /> 
                </div>

                <div
                  className="choice medicos"
                  onClick={(e) => {
                    setPage("medicos");
                    chanceChoiceMenu.handler(e.target);

                  }}
                >
                  <FontAwesomeIcon icon={faUserDoctor} /> 
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-center">{centerContent(page)}</div>
        </div>
      </section>
    </>
  );
}else{

  window.location.href = "/";

}

};

export default UserHome;
