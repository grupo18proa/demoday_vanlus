import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from '.git/imgs/crianca.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export function DadosCondutor1 () {
    return (

        <>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>

                <div className="LadoEsquerdo">

                    <div className="containerEsquerdo">

                        

                            <img className='cadastro-logo' src={Logo} alt="Vanlus"/>
                            
                       
                        <div className='h2-cadastro'>
                            <h2>Cadastre-se</h2>
                        </div>

                        
            
                            <form id='cadastro-condutor1'>

                                <input type="email" name="email" placeholder= '*Informe um email'/>

                                <input type="text" name="Nome Completo" placeholder= "*Seu nome completo"/>

                                <input type="password" name="senha" placeholder= "*Crie uma senha"/> 
                                
                                <input type="password" name="senha" placeholder= "*Confirme sua senha"/>

                                <section className='proximo'>

                                    <BsFillArrowRightCircleFill size={65} id='next1' />

                                </section>

                            </form>
                            <div className='linha-progressao'>
                                <div id='progressao'></div>
                                  <div className='nivel'><small>1</small></div> 
                                  <div className='nivel'><small>2</small></div> 
                                  <div className='nivel'><small>3</small></div> 
                                  <div className='nivel'><small>4</small></div> 
                                  <div className='nivel'><small>5</small></div> 
                                  <div className='nivel'><small>6</small></div> 
                            </div>

                        </div>
                    </div>

        </>

    )
}