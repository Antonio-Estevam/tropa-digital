import calendario from '../../assets/images/calendario.svg';
import './style.css';
import { ReactNode } from 'react';

type cardType = {
    children: ReactNode;
    time:string;
    title: string;
    text: string;
}

export function Card(props:cardType){
    return(
        <article>
            <div className="content">
                <div className="image">
                    {props.children}
                    <legend>
                        <img src={calendario} alt="calendário" className="calendario"/>
                        <p>{props.time}</p>
                    </legend>
                </div>
                <div className="text">
                    <strong>
                        {props.title}
                    </strong>

                    <p>
                         {props.text}
                    </p>
                </div>
            </div> 
        </article>
    )
}