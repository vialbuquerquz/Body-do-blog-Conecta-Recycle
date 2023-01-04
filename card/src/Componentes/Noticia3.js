import React from 'react';
import './Card.css';
import {AiOutlineUser} from 'react-icons/ai';
import {BsStopwatch} from 'react-icons/bs';

function Noticia3({title,imageurl,body}){
    return(
       <div>
            <div className='noticia3'>
                    <div className="img">
                        <img src={imageurl} alt='imagem teste'></img>
                    </div>
                    <div className="disposicaotext">
                        <div className="cardtitle">
                            <h3>{title}</h3>
                            <p className="subtitleautor"><font color="#808080"><AiOutlineUser /> G1 </font></p><br></br>
                            <p className="subtitledate"><font color="#808080"><BsStopwatch /> 12/11/2022</font></p>
                        </div>
                        <div className="cardbody">
                            <p>{body}</p>
                        </div>
                    </div>
                    <div>
                        <hr className="linha"></hr>
                    </div>
                    <div className="cardbutton">
                        <button>
                            <a href="https://www.nationalgeographicbrasil.com/meio-ambiente/2022/05/lixo-eletronico-o-que-e-e-por-que-e-importante-recicla-lo"
                            target='_blank'>
                                Ler mais
                            </a>
                        </button>
                    </div>
            </div>
        </div> 
    )
}

export default Noticia3;