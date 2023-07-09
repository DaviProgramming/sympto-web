import React from "react";
import Navbar from "../components/Navbar";

const Consuta = (props) => {
  return (
    <>
      <Navbar props={props} />

      <section>
        <div className="section-content consulta">
          <div className="option-testee">
            <select name="teste-select" id="select-teste">

                <option value="braco">braco</option>
                <option value="cabeca">cabeca</option>
                <option value="tronco">tronco</option>



            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consuta;
