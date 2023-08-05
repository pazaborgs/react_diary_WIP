import Modal from 'react-modal'
import { useState } from 'react';
import "./Notas.css"

Modal.setAppElement('#root')

const Notas = (props) => {

    const [modalisOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const clickDelete = () => {
        const removeid = props.nome
        props.deleteItem(removeid)
    }

    const mood = props.moods[0]


    return (
        <div className="nota" style={{ backgroundColor: mood.cor }}>
            <div className="cabecalho">
                <p>{props.nome}</p>
                <time>{props.data}</time>
            </div>

            <div className="centro">
                <p>{props.descricao}</p>
            </div>

            <div className="rodape">
                <button className="open-modal" onClick={openModal}>
                    Open
                </button>

                <Modal
                    isOpen={modalisOpen}
                    onRequestClose={closeModal}
                    contentLabel="Nota"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: mood.cor,
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '60px'
                        }
                    }}
                >

                    <h1 className='modaltitle'>{props.nome}</h1>
                    <time className='modaldate'>{props.data}</time>
                    <p className='modaltext'>{props.descricao}</p>


                    <button className="close-modal" onClick={closeModal}>Close</button>
                    <button className="delete-btn" onClick={clickDelete}>Delete</button>

                </Modal>
            </div>
        </div>
    )
}

export default Notas