// criação da estrutura do componente second-content 'O que ofereceomos?'
import './SecondContent.css'
import Van from './van.png';

export function SegundoConteudo () {
    return(

        <>

            <div id='SegundoConteudo'>
        
                <div className='parteAzul'>

                    <h1>O que oferecemos?</h1>
                    <h2>Para os responsáveis:</h2>

                </div>

                <div id='container'>

                    <div>
                        <div className='funcionalidades'>
<<<<<<< HEAD
                            <img alt="função" style={{borderRadius:"30px"}} width="100%" height="100%" src="https://cdn.discordapp.com/attachments/1026674509954166837/1042568399336783882/localpng.png"/>
                        </div>

                        <h1>Geolocalizção</h1>
=======
                        Geolocalização
                        </div>

                        <h1>Geolocalização</h1>
>>>>>>> 772c28124e28e691f995700ec712655c7916c72f

                        <p>Usando tecnologias de localização, você poderá saber, em tempo real, onde seu filho está.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img width="150px" height="150px" src="https://cdn.discordapp.com/attachments/1026674509954166837/1042569510626001008/moeda.png"/>
                        </div>

<<<<<<< HEAD
                        <h1>Preço Justo</h1>
=======
                        <h1>Preço justo</h1>
>>>>>>> 772c28124e28e691f995700ec712655c7916c72f

                        <p>Negociar o melhor preço para você com seu condutor é uma possbilidade dentro da Vanlus.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img alt="função" style={{borderRadius:"30px"}} width="100%" height="100%" src="https://cdn.discordapp.com/attachments/1026674509954166837/1042572011416850482/van.png"/>
                        </div>

                        <h1>Condutores qualificados</h1>

                        <p>Encontre os melhores condutores perto da sua casa e os mais qualificados do mercado.</p>

                    </div>

                </div>
        
            </div>
        </>

    )
}

