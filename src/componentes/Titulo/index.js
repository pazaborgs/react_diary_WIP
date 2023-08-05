import "./Titulo.css"

const Titulo = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="titulo">
            <label>{props.label}</label>
            <input maxLength="50" onChange={aoDigitado} value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default Titulo