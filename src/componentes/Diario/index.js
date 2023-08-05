import Notas from "../Notas"
import "./Diario.css"

const Diario = (props) => {

    const deleteItem = (item) => {
        const newList = props.episodios.filter(episodio => episodio.titulo !== item)
        props.setEpisodios(newList)
        console.log(props.episodios)
    }

    return (
        <section className="diario">
            
            <div className="notas">
                {props.episodios.map(episodio => <Notas
                    key={episodio.titulo}
                    nome={episodio.titulo}
                    data={episodio.data}
                    urgencia={episodio.urgencia}
                    descricao={episodio.descricao}
                    moods={props.moods.filter(mood => mood.nome === episodio.urgencia)}
                    deleteItem={deleteItem}
                />
                )}
            </div>

        </section>
    )
}

export default Diario