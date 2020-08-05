import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/9474185?s=460&u=2616fa170745b83ac8bc22bc55a22aeec7428146&v=4" alt="Victor Ambiel"/>
                        <div>
                            <strong>Victor Ambiel</strong>
                            <span>Algorithms</span>
                        </div>
                    </header>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br/><br/>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <footer>
                        <p>
                            Price/hour
                            <strong>$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="WhatsApp"/>
                            WhatsApp
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;