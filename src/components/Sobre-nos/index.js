import './style.css'
import Lucao from './imgs/Lucao.png'
import Mi from './imgs/Mirelinha.png'
import Fe from './imgs/Fe.png'
import Emissu from './imgs/Emissu.png'
import Nick from './imgs/Nick.png'
import Gabz from './imgs/Gabz.png'
import Cris from './imgs/Cris.png'

export function SobreNós () {
    return(

        <>
            <section id='sobreNos'>  

                    <div className='SubTitulo'>

                        <h2>Sobre nós</h2>
                        <p>O que somos? Quem somos? O que fazemos? Conheça nossa história e descobrirá.</p>

                    </div>

                    <div id='carrossel'>

                        <div id='imgDeAlgumaCoisa'>

                            <img src='' alt=''/>

                        </div>

                        <span>

                            <h2>Quando Começamos?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, lacus et posuere varius, turpis lorem tempor tortor, vel molestie arcu ex id mi. Nullam eu nisi tellus. Donec aliquet lacus in neque hendrerit sagittis. Maecenas et tempor ex. Maecenas ac velit vitae quam pretium euismod ut eu libero. Cras vestibulum, leo a accumsan mattis, quam elit consectetur justo, sed luctus dolor nisi vitae urna. Ut egestas ornare sapien, condimentum eleifend enim tincidunt sit amet.</p>
                    
                        </span>

                    </div>

                    <div id='membros'>
                    
                        <div>

                            <img src={Lucao} alt=''/>
                            <p>descrição de cada um</p>
                        
                        </div>

                        <div>

                            <img src={Mi} alt=''/>
                            <p>descrição de cada um</p>

                        </div>    
                    
                        <div>

                            <img src={Cris} alt=''/>
                            <p>descrição de cada um</p>

                        </div>        
                        
                        <div>

                            <img src={Gabz} alt=''/>
                            <p>descrição de cada um</p>

                        </div>

                        <div>

                            <img src={Emissu} alt=''/>
                            <p>descrição de cada um</p>

                        </div>    
                    
                        <div>

                            <img src={Fe} alt=''/>
                            <p>descrição de cada um</p>

                        </div>

                        <div>

                            <img src={Nick} alt=''/>
                            <p>descrição de cada um</p>
                        
                        </div> 
                
                    </div>

            </section>
        </>

    )
}