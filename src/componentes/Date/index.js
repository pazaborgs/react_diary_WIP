import "./Date.css"

const Date = (props) => {
    return (
        <div className="data">
            <label>Data</label>
            <input type="date" onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}></input>
        </div>
    )
}

export default Date