import React from 'react';
import './Card.css';
import {AiOutlineUser} from 'react-icons/ai';
import {BsStopwatch} from 'react-icons/bs';


function Card2({tittle,imageurl,body}){
    return(
        <div>
            <div className='artigo2'>
                <div className="img">
                    <img src={imageurl} alt='Região metropolitana do Recife'></img>
                </div>
                <div className="disposicaotext">
                    <div className="tittle2">
                        <h3>{tittle}</h3>
                         <p className="subtitleautor"><font color="#808080"> <AiOutlineUser /> National Geographic </font></p><br></br>
                         <p className="subtitledate"><font color="#808080"> <BsStopwatch/> 19/12/2022</font></p>
                </div>
                <div className="cardbody">
                    <p>{body}</p>
                </div>
                <div className="linha">
                        <hr></hr>
                </div>
                </div>
                <div className="cardbutton">
                    <button>
                        <a href="https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2021/09/12/recicladora-de-recife-fatura-r-80-mil-com-coleta-de-lixo-eletronico.ghtml"
                        target='_blank'>
                            Ler mais
                        </a>
                    </button>
                </div>
                </div>
        </div>
    )
}

export default Card2;