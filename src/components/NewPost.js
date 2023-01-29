import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
    // Os estados abaixo servem para podermos monitorar o que o usuário digita e escolhe, de forma que seja possível utilizar essas informações conforme necessidade.
    const [title, setTitle] = useState('');
    const [age, setAge] = useState('');
    const [cargo, setCargo] = useState('aluno');
    const [discipline, setDiscipline] = useState('geografia')
    
    const historico = useNavigate();

    // A função abaixo é ativada quando o usuário enviar o formulário.
    const enviarForm = (e) => {
        // A função abaixo previne a página de ser atualizada ao clicar no botão de enviar formulário.
        e.preventDefault();
        const pessoa = {title, age, cargo, discipline};

        fetch('http://localhost:8000/corpoescolar', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(pessoa)
        }).then(() => {
            historico('/');
        });
    }

    return ( 
    <div className="create">
        <h2>Adicionar pessoas</h2>
        <form onSubmit={enviarForm}>
            <label>Nome:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>

            <label>Idade</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>

            <label>Cargo:</label>
            <select value={cargo} onChange={(e) => setCargo(e.target.value)} required>
                <option value="professor">Professor</option>
                <option value="aluno">Estudante</option>
                <option value="funcionario">Funcionário</option>
            </select>

            <label>Departamento:</label>
            <select value={discipline} onChange={(e) => setDiscipline(e.target.value)} required>
                <option value="Geografia">Geografia</option>
                <option value="História">História</option>
                <option value="Sociologia">Sociologia</option>
                <option value="Estudantes">Estudantes</option>
                <option value="Limpeza & Organização">Limpeza & Organização</option>
                <option value="Coordenação Escolar">Coordenação Escolar</option>
                <option value="Direção Escolar">Direção Escolar</option>
            </select>
            <button>Adicionar</button>
        </form>
    </div> 
    );
}
 
export default NewPost;