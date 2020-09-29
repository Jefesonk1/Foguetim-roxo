import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return ( 
 <article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/8725163?s=460&u=e70c496ea22e68743af48c4aef4dd2bdf0829658&v=4" alt="Jefeson"/>
        <div>
            <strong>Jefeson Delazeri</strong>
            <span>Física</span>
        </div>
    </header>
    <p>
        bla bla bla bla
        <br/> <br/>
        asdlasdkladkldaasdas
    </p>
    <footer>    
        <p>
            preco/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
        
    </footer>
</article>);
}
export default TeacherItem;