import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Diana L.', age: '29 anos', cargo: 'professor', discipline: 'Geografia', id: 11},
        {title: 'Jean S.', age: '27 anos', cargo: 'professor', discipline: 'História', id: 12},
        {title: 'Juliana M.', age: '36 anos', cargo: 'professor', discipline: 'Sociologia', id: 13},
        {title: 'David M.', age: '17', cargo: 'aluno', discipline: 'Estudantes' , id: 21},
        {title: 'João P.', age: '18', cargo: 'aluno', discipline: 'Estudantes' , id: 22},
        {title: 'Marcos D.', age: '14', cargo: 'aluno', discipline: 'Estudantes' , id: 23}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Corpo Institucional" handleDelete={handleDelete} />

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'professor')} title='Corpo Docente' handleDelete={handleDelete} />

            <BlogList blogs={blogs.filter((blog) => blog.cargo === 'aluno')} title='Corpo Discente' handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;