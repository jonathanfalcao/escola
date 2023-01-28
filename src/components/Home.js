import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    // A const abaixo possui tudo o que aparece na tela. A função está como NULL pois estamos usando o método GET dentro de useEffect() para chamar os dados dentro de data/db.json
    const [blogs, setBlogs] = useState(null);

    // A função abaixo é para aparecer a mensagem "Carregando..." enquanto a página utiliza o método GET para mostrar os dados.
    const [isLoading, setIsLoading] = useState(true);

    // A função abaixo é rodada toda vez que a página for atualizada. É bom para pegar dados (GET/FETCH)
    useEffect(() => {
        fetch('http://localhost:8000/corpoescolar')
            .then(responseObj => {
                return responseObj.json();
            })
            .then(data => {
                setBlogs(data);
                // Quando a página conseguir recuperar os dados a função abaixo fará com que a mensagem "Carregando..." desapareça
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);
    // A array vazia acima impede que entre em um loop infinito, ou seja, a função toda só é lançada uma vez e não toda vez que as informações dentro de setBlogs mudar.

    return ( 
        <div className="home">

            {/* Por conta da função useSate() estar com NULL e a função useEffect() não carregar de forma síncrona, é necessário adicionar && para que funcione, pois se "blogs" for falso, então não irá carrehar a página. Ou seja, dessa forma o arquivo só aparecerá na tela quando "blogs" for verdadeiro. */}

            {isLoading && <div>Carregando...</div>}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.cargo !== 'materia')} title='Corpo Escolar' />}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.cargo === 'professor')} title='Corpo Docente' />}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.cargo === 'aluno')} title='Corpo Discente' />}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.cargo === 'funcionario')} title='Corpo Institucional' />}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.cargo === 'materia')} title='Matérias Escolares' />}
        </div>
     );
}
 
export default Home;