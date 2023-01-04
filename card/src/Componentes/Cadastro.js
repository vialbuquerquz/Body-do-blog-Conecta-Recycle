import React from 'react';
import './Card.css';

function Form(){
    function CadastroUsuario(e){
        e.preventDefault()
            alert("Cadastro realizado. Confira seu email.")
    }
    return(
        <div>
            <section className="sectioncadastro">
                <h1 className='sectiontext'><font color="#ffffff">Se inscreva agora em nosso blog</font></h1>
                <form onSubmit={CadastroUsuario}>
                    <font color="#ffffff">
                        <input className="inputemail" type="email" placeholder="Digite o seu email para receber mais notícias"></input>
                        <input className= "buttoncadastro" type="submit" value="INSCREVA-SE"></input>
                    </font>
                    </form>
            </section>
        </div>
    )
}
export default Form;