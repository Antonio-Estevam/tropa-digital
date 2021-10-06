import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';
import logo from '../assets/images/logo.svg';
import fundo from '../assets/images/fundo.jpg';
import dev from '../assets/images/dev.png';




export function Login(){
    
    const history = useHistory();
    
    function authentication(event: FormEvent){
        event.preventDefault();
        history.push("/dashboard");
    }
    return(
        <div id="page-auth">
            <main>
                <img src={logo} alt="Tropa Digital"  draggable="false"/>

                <h1> Bem Vindo ao <strong>painel</strong></h1>

                <form method="get">

                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" className="input-text" />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha"  className="input-text"/>

                    <input type="submit" value="Acessar" className="access" onClick={authentication} />

                </form >
            </main>

            <aside>
                <img src={fundo} alt="fundo estrlado" draggable="false" />
            </aside>

            <div className="dev">
                <img src={dev} alt="Programador codando" draggable="false" id="dev"/>
            </div>
        </div>            
    );
}