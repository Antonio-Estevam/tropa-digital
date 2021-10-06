
import '../styles/home.css';
import {Card} from '../components/Card';
import {Dashboard} from '../components/Dashboard';
import modelo from '../assets/images/modelo.png';

export function Home(){
    return(
            <Dashboard>
                    <div className="agroup-cards">                        
                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 

                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 
                        
                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 
                        
                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 

                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 

                        <Card 
                            title="Lorem Ipsum is simply dummy text of the printing and typesettin..." 
                            time="5min atrás"
                            text="Lorem Ipsum is simply dummy text of the printing and typesettin."
                        >
                            <img src={modelo} alt="Modelo" />
                        </Card> 
                        
                    </div>   
            </Dashboard>           
    );
}