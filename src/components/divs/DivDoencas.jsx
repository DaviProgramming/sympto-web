import React from 'react'

import DoencaCard from '../cards/DoencaCard'

const DivDoencas = (props) => {
    return (

        <div className="doencas">
            <div className="doencas-content">

                <DoencaCard nome="Gripe" descricao="qualquer descrição" />

            </div>

        </div>
    )
}

export default DivDoencas