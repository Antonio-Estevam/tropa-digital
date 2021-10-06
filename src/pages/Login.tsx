import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';
import logo from '../assets/images/logo.svg';
import fundo from '../assets/images/fundo.jpg';
import eye from '../assets/images/eye-solid.svg';
import dev from '../assets/images/dev.png';

export function Login(){
    
    const history = useHistory();
    
    function authentication(event: FormEvent){
        event.preventDefault();
        history.push("/dashboard");
    }

    function showPassword(event: FormEvent){
        event.preventDefault();

        const password = document.getElementById('password');
        
        if(password){

            if(password.getAttribute('type') == 'password'){

                password.setAttribute('type', 'text');
            }else{
                password.setAttribute('type', 'password');
            }

        }else{}
        
        
    } 
    return(
        <div id="page-auth">
            <main>
                <img src={logo} alt="Tropa Digital"  draggable="false"/>

                <h1> Bem Vindo ao <strong>painel</strong></h1>

                <form method="get">

                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" className="input-text" />
                    <div id="gruop-password">
                        <input type="password" name="password" id="password" placeholder="Digite sua senha"  className="input-text"/>
                        <button id="btn" onClick={showPassword} ><img src={eye} alt="Mostrar senha" /></button>

                    </div>

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