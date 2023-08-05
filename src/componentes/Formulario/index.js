import Titulo from "../Titulo"
import Descricao from "../Descricao"
import "./Formulario.css"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import Date from "../Date"

import { useState } from "react"

const Formulario = (props) => {


    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [urgencia, setUrgencia] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoContarEpisodio({
            titulo,
            descricao,
            urgencia,
            data
        })

        setTitulo('')
        setData('')
        setDescricao('')
        setUrgencia('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Como foi seu dia?</h1>
                <Titulo
                    obrigatorio={true}
                    label="Título"
                    placeholder="Digite um título"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />

                <Date
                    obrigatorio={true}
                    label="Data"
                    valor={data}
                    aoAlterado={valor => setData(valor)}

                />

                <Descricao
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Como foi seu dia?"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Urgência"
                    moods={props.moods}
                    valor={urgencia}
                    aoAlterado={valor => setUrgencia(valor)}
                />

                <Botao label="Submit" />
            </form>


        </section>

    )
}

export default Formulario

