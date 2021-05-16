import React from 'react';
import { Element } from 'react-scroll';
import brennon from '../../images/brennon.jpg';

export default function ResumeInfo() {

    return(
        <section id="resumeInfo">
            <Element className="container" name="ResumeInfo">
                <h2>Currículo</h2>
                <div className="infos">
                    <header className="profile">
                        <div className="content">
                            <h2>Brennon Gabriel de Oliveira</h2>
                            <p>Brasileiro, solteiro, 17 anos</p>
                            <p>E-Mail: brennonoliveira20014@gmail.com</p>
                            <p>Telefone: (42) 99901-7838</p>
                        </div>
                        <div className="image"><img src={brennon} alt="Brennon Gabriel de Oliveira"/></div>
                    </header>
                    <div className="body">

                        <div className="wrapper">
                            <h3>Formação</h3>
                            <ul>
                                <li>Ensino Médio. Padre Pedro Grzelczak, previsão de conclusão em 2021.</li>
                            </ul>
                        </div>

                        <div className="wrapper">
                            <h3>Experiência Profissional</h3>
                            <ul>
                                <li>2021-2021 - Autônomo
                                    <p>Cargo: Desenvolvedor Web</p>
                                    <p>Cargo: Desenvolvedor Web</p>
                                </li>
                            </ul>
                        </div>

                        <div className="wrapper">
                            <h3>Qualificações e Atividades Complementares</h3>
                            <ul>
                                <li>Curso Webmaster Front-End Completo (Danki Code, 2020 - Carga Horária: 80 horas)</li>
                                <li>Curso Design de Aplicativos (Danki Code, 2021 - Carga Horária: 3 horas)</li>
                                <li>Conhecimento em React e React native</li>
                                <li>Curso de PHP (SoloLearn, 2020)</li>
                                <li>Curso Git e contribuições para projetos Open Source (Udemy, 2021 - 3,5 horas)</li>
                            </ul>
                        </div>

                        <div className="wrapper">
                            <h3>Informações Adicionais</h3>
                            <ul>
                                <li>Conhecimento em Inglês</li>
                                <li>Conhecimento em Windows e Linux</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Element>
        </section>
    )
}