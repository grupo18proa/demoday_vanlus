import '../Account/Account.css';
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'

function ListaPresenca() {
    return (
        <>
            <div className="container-a lista-presenca">
                <div className='container-b'>
                    <div className='children'>
                        <h2>Mirella Parravano de Neves</h2>
                    </div>

<div className='space'></div>

                    <div className='contact'>

                        <h3>Responsável</h3>
                            <p className='square_white'>Adriana Parravano de Neves</p>

<div className='space'></div>

                        <h3>Escola</h3>
                            <p className='square_white'>Escola Estadual Dr. Edmundo de Carvalho</p>
                            
<div className='space'></div>

                        <h3>Endereço</h3>
                            <p className='square_white'>R. Tito, 54- Vila Romana, São Paulo - SP, 05051-000</p>

<div className='space'></div>

                        <h3>Celular</h3>
                            <p className='square_white'>(11) 12345-6789</p>
                    </div>

                    <div className='presence'>
                        <AiOutlineCheckSquare/>
                        <AiOutlineCloseSquare/>
                    </div>
                </div>
                <div className='container-c'>

                </div>
            </div>
        </>
    )
}

export default ListaPresenca;