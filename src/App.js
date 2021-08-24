//import './App.css';
import image from './assets/img/profile.jpg'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Thomas Tiercin</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">A propos</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Expériences</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Etudes</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Compétences</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Centres d'intérêts</a></li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Thomas 
                        <span className="text-primary"> Tiercin</span>
                    </h1>
                    <div className="subheading mb-5">
                        Développeur informatique 
                        <a> </a>
                        <a href="mailto:thomaastiercin@gmail.com">thomastiercin@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Je suis un jeune développeur âgé de
                    24 ans. Après 4 années en tant que
                    consultant ERP, il est important pour
                    moi d'évoluer et d'étoffer mes
                    connaissances. Je souhaite changer
                    de langage informatique en me
                    dirigeant vers du développement
                    .NET.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/thomas-tiercin/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/ThomasTiercin"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Expériences</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">CONSULTANT ERP</h3>
                            <div className="subheading mb-3">CAPGEMINI - CDI</div>
                            <p>ERP PeopleSoft / FSCM :
                            <li>Continuité de mes missions d'alternance</li>
                            Missions migration ERP 9.0 vers 9.2 :
                            <li>Reports techniques</li>
                            <li>Analyses fonctionnelles et études d'impact</li>
                            <li>Responsable de la gestion des livrables et des livraisons</li>
                            Maintenance et évolution de l'application créée durant mon alternance :
                            <li>Formation des collaborateurs</li>
                            Missions managériales :
                            <li>Backup responsable de deux applications ERP</li>
                            <li>Référent technique et fonctionnel pour deux clients</li>
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Octobre 2020 - Aujourd'hui</span></div>
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Etudes</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">ENI Ecole Informatique - Nantes</h3>
                            <div className="subheading mb-3">Master 2 - MS2I (Manager des Systèmes d'Information et d'Infrastructure option SYSTÈMES D’INFORMATION)</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2019 - 2020</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">ENI Ecole Informatique - Rennes</h3>
                            <div className="subheading mb-3">Licence 3 / Master 1 - CDI (Concepteur Développeur Informatique)</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2017 - 2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Lycée De La Salle - Rennes</h3>
                            <div className="subheading mb-3">BTS SIO (Services Informatiques aux Organisations) spécialisation SLAM (Solutions Logicielles et Applications Métiers)</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015 - 2017</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Lycée Notre Dame des Marais - Fougères</h3>
                            <div className="subheading mb-3">Baccalauréat STMG (Sciences Technologique du Management et de la Gestion)</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Compétences</h2>
                    <div className="subheading mb-3">Langage de programmation et outils</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    </ul>
                    <div className="subheading mb-3">Techniques</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Développement Agile & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Centres d'intérêts</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr className="m-0" />
        </div>        
    </div>
  );
}

export default App;

