import Card from './Componentes/Card';
import Card2 from './Componentes/Card2';
import Card3 from './Componentes/Card3';
import Card4 from './Componentes/Card4';
import Card5 from './Componentes/Card5';
import Card6 from './Componentes/Card6';
import Form from './Componentes/Cadastro';
import Noticias1 from './Componentes/Noticias1';
import Noticia2 from './Componentes/Noticia2';
import Noticia3 from './Componentes/Noticia3';

function App() {
  return (
    <div className="App">

        <Card 
        title='O conceito de lixo eletrônico'
        imageurl="https://greeneletron.org.br/blog/wp-content/uploads/2020/08/12.jpg"
        body="Também chamado de Resíduos de Equipamentos Eletroeletrônicos (ou REEE), o documento Uma definição global de E-waste da Universidade..."
        />
        <Card2 
        tittle="O impacto do lixo eletrônico na região metropolitana do Recife"
        imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4ZKATtGLQCHWgof2SJga2nzddAO_a_RhMA&usqp=CAU"
        body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Card3
        tittle="Título do artigo"
        imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
        body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Card4 
          tittle="Título do artigo"
          imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
          body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Card5
        tittle="Título do artigo"
        imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
        body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Card6
        tittle="Título do artigo"
        imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
        body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Form />
        <Noticias1
          tittle="Título do artigo"
          imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
          body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Noticia2
          tittle="Título do artigo"
          imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
          body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
        <Noticia3
          tittle="Título do artigo"
          imageurl="https://www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg"
          body="A produção de lixo eletrônico tem crescido gradativamente ao longo..."
        />
    </div>
  );
}

export default App;
