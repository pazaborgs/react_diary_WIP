import "./Descricao.css"

const Descricao = (props) => {
    return (
        <div className="descricao">
            <label>{props.label}</label>
            <textarea onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} placeholder={props.placeholder} />
        </div>
    )
}

export default Descricao