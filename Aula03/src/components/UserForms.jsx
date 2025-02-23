import { useState } from "react";
import '../styles/UserForms.css'

const UserForms = () => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            nome,
            sobrenome,
            idade,
            senha,
            email
        }
        console.log(user);
    }

    return (
        <div>
        
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={nome}
            onChange = {(e) => setNome(e.target.value)}
            placeholder="Digite Seu Nome"
            />
            <br/>
            <input type="text"
            value={sobrenome}
            onChange = {(e) => setSobrenome(e.target.value)}
            placeholder="Digite Seu Sobrenome"
            />
            <br/>
            <input type="number"
            value={idade}
            onChange = {(e) => setIdade(e.target.value)}
            placeholder="Digite Sua Idade"
            />
            <br/>
            <input type="password"
            value={senha}
            onChange = {(e) => setSenha(e.target.value)}
            placeholder="Digite Sua Senha"
            />
            <br/>
            <input type="email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder="Digite Seu Email"
            />
            <br/>
            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}

export default UserForms;