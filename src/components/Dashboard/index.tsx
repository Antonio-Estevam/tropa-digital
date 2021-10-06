import { ReactNode } from 'react';
import {Button} from '../../components/Button';
import logo from '../../assets/images/logo.svg';
import signal from '../../assets/images/home-laranja.svg';
import contatos from '../../assets/images/contatos.svg';
import frame from '../../assets/images/Frame.svg';
import './style.css';

type cardType = {
    children: ReactNode;
}

export function Dashboard(props:cardType){
    return(
        <div className="conteiner">
            <nav>
                <header>
                    <img src={logo} alt="Tropa Digital" />
                </header>
                <div className="buttons-group">

                    <Button isActive >
                        <img src={signal} alt="início" />
                        início
                    </Button>

                    <Button >
                        <img src={frame} alt="Relatórios" />
                        Relatórios
                    </Button>

                    <Button >
                        <img src={contatos} alt="início" />
                        Contatos
                    </Button>

                    <Button >
                        <img src={contatos} alt="início" />
                        Contatos
                    </Button>

                    <Button >
                        <img src={contatos} alt="início" />
                        Contatos
                    </Button>

                    <Button >
                        <img src={contatos} alt="início" />
                        Contatos
                    </Button>


                </div>
            </nav>
            <section>
                <h1>Olá <strong>Usuário</strong></h1>
                <hr/>
                {props.children}                    
            </section>

            
            
        </div>  
    )
}