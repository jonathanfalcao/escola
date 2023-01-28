import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/corpoescolar')

    return ( 
        <div className="home">

            {/* Por conta da função useSate() estar com NULL e a função useEffect() não carregar de forma síncrona, é necessário adicionar && para que funcione, pois se "blogs" for falso, então não irá carrehar a página. Ou seja, dessa forma o arquivo só aparecerá na tela quando "blogs" for verdadeiro. */}

            {error && <div>{error}</div>}

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