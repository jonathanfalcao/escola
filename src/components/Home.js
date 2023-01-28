import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        // {title: , age: , cargo: , discipline: , id: },

        //Professores
        {title: 'Diana L.', age: '29 anos', cargo: 'professor', discipline: 'Geografia', id: 101},
        {title: 'Jean S.', age: '27 anos', cargo: 'professor', discipline: 'História', id: 102},
        {title: 'Juliana M.', age: '36 anos', cargo: 'professor', discipline: 'Sociologia', id: 103},

        // Estudantes
        {title: 'David M.', age: '17', cargo: 'aluno', discipline: 'Estudantes' , id: 201},
        {title: 'João P.', age: '18', cargo: 'aluno', discipline: 'Estudantes' , id: 202},
        {title: 'Marcos D.', age: '14', cargo: 'aluno', discipline: 'Estudantes' , id: 203},

        // Funcionários
        {title: 'Mauricio J.', age: '33 anos', cargo: 'funcionario', discipline: 'Coordenação Escolar', id: 301},
        {title: 'José A.', age: '40 anos', cargo: 'funcionario', discipline: 'Coordenação Escolar', id: 302},
        {title: 'Juliana M.', age: '26 anos', cargo: 'funcionario', discipline: 'Coordenação Escolar', id: 303},
        {title: 'Marcelo R.', age: '21 anos', cargo: 'funcionario', discipline: 'Limpeza & Organização', id: 304},
        {title: 'Guilherme T.', age: '29 anos', cargo: 'funcionario', discipline: 'Limpeza & Organização', id: 305},
        {title: 'João V.', age: '35 anos', cargo: 'funcionario', discipline: 'Limpeza & Organização', id: 306},

        // Matérias
        {title: 'Língua Portuguesa', cargo: 'materia', discipline: 'Língua Portuguesa', id: 401},
        {title: 'Matemática', cargo: 'materia', discipline: 'Matemática', id: 402},
        {title: 'Química', cargo: 'materia', discipline: 'Química', id: 403},
        {title: 'Física', cargo: 'materia', discipline: 'Física', id: 404},
        {title: 'Biologia', cargo: 'materia', discipline: 'Biologia', id: 405},
        {title: 'Geografia', cargo: 'materia', discipline: 'Geografia', id: 406},
        {title: 'História', cargo: 'materia', discipline: 'História', id: 407},
        {title: 'Sociologia', cargo: 'materia', discipline: 'Sociologia', id: 408},
        {title: 'Filosofia', cargo: 'materia', discipline: 'Filosofia', id: 409},
        

    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* <BlogList blogs={blogs} title="Corpo Institucional" handleDelete={handleDelete} /> */}

            <BlogList blogs={blogs.filter((blog) => blog.cargo !== 'materia')} title='Corpo Escolar' handleDelete={handleDelete}/>

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'professor')} title='Corpo Docente' handleDelete={handleDelete} />

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'aluno')} title='Corpo Discente' handleDelete={handleDelete} />

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'funcionario')} title='Corpo Institucional' handleDelete={handleDelete} />

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'materia')} title='Matérias Escolares' handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;