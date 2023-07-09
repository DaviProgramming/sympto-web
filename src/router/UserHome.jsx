import React from "react";
import Navbar from "../components/Navbar";

import DivDoencas from "../components/divs/DivDoencas";
import DivHistorico from "../components/divs/DivHistorico";
import DivMedicos from "../components/divs/DivMedicos";

import imageUser from "../assets/james-person-1.jpg";
import sendLogin from "../system/sendLogin";

import {
  faHouse,
  faClipboardCheck,
  faUserDoctor,
  faSearch,
  faPlus,
  faLaptopMedical
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const UserHome = (props) => {
  const [page, setPage] = useState("inicio");

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
              <div className="nova-consulta"><FontAwesomeIcon icon={faLaptopMedical}/>Nova consulta</div>
            </div>
          </div>

          <div className="middle">
            <div className="middle-doencas">
              <div className="title">Doenças mais procuradas:</div>
              <div className="cards-content doencas">
                <div className="card">
                  <div className="card-content">
                    <div className="img-doenca">
                      <img
                        src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/05/treinargripado_netshoes_13052021.jpeg?fit=1256%2C500&ssl=1"
                        alt=""
                      />
                    </div>

                    <div className="nome-doenca">
                      <span>Gripe</span>
                      <span className="infos">A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão</span>

                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content">
                    <div className="img-doenca">
                      <img
                        src="https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq"
                        alt=""
                      />
                    </div>

                    <div className="nome-doenca">
                      <span>Gripe</span>
                      <span className="infos">A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content">
                    <div className="img-doenca">
                      <img
                        src="https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq"
                        alt=""
                      />
                    </div>

                    <div className="nome-doenca">
                      <span>Gripe</span>
                      <span className="infos">A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão</span>

                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content">
                    <div className="img-doenca">
                      <img
                        src="https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq"
                        alt=""
                      />
                    </div>

                    <div className="nome-doenca">
                      <span>Gripe</span>
                      <span className="infos">A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle-historicos">
              <div className="title">Historico:</div>
              <div className="cards-content">
                <div className="card">
                  <div className="card-content">teste</div>
                </div>
                <div className="card">
                  <div className="card-content">teste</div>
                </div>
                <div className="card">
                  <div className="card-content">teste</div>
                </div>
                <div className="card">
                  <div className="card-content">teste</div>
                </div>
                
              </div>
            </div>

            <div className="middle-medicos">
              <div className="title">Médicos:</div>
              <div className="cards-content">
                <div className="card"><div className="card-content">Teste</div>
                </div>
                <div className="card"><div className="card-content">Teste</div>
                </div>
                <div className="card"><div className="card-content">Teste</div>
                </div>
                <div className="card"><div className="card-content">Teste</div>
                </div>
                
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

  return (
    <>
      <Navbar props={props} />
      <section className="container user-home">
        <div className="section-content user-home">
          <div className="user-info">
            <div className="content">
              <div className="userCard">
                <div className="img">
                  <img src={imageUser} alt="" />
                </div>
                <div className="nome">{sendLogin.data.usuario}</div>
                {/* <div className="idade">25</div> */}
                {/* <div className="sexo">Masculino</div> */}
              </div>

              <div className="choices">
                <div
                  className="choice inicio ativado"
                  onClick={(e) => {
                    setPage("inicio");
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} /> Inicio
                </div>

                <div
                  className="choice historico"
                  onClick={(e) => {
                    setPage("historico");
                  }}
                >
                  <FontAwesomeIcon icon={faClipboardCheck} /> Historicos
                </div>

                <div
                  className="choice medicos"
                  onClick={(e) => {
                    setPage("medicos");
                  }}
                >
                  <FontAwesomeIcon icon={faUserDoctor} /> Médicos
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-center">{centerContent(page)}</div>

      
        </div>
      </section>
    </>
  );
};

export default UserHome;
