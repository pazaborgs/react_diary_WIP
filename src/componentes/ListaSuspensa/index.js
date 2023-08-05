import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div className="select-div">
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.moods.map(mood => {
                    return <option key={mood}>{mood}</option>
                })}

            </select>
        </div>
    )
}

export default ListaSuspensa