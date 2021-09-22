import React from 'react';
import { Link } from "react-router-dom";
import { experienceService } from '../../_services';
class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            experiences: []
        };
    }

    componentDidMount(e) {
        experienceService.getAll().then(experiences => this.setState({ experiences }));
    }

    render() {
        const { experiences } = this.state;
        let { i } = this.state;
        const content = experiences.map((experience, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{experience.title}</td>
                <td>{experience.subtitle}</td>
                <td>{experience.city}</td>
                <td>{experience.date}</td>
                <td>{experience.detail}</td>
                <td><Link to={'/admin/editExperience/'+experience.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deleteExperience/'+experience.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
            </tr>
            )
        )
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Experiences</h2>
                    </div>      
                    <div className="container">          
                        <div><Link to={'/admin/createExperience'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
                        <div className="table-responsive">
                            <table className="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Sous-titre</th>
                                        <th scope="col">Ville</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Detail</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                            </table>
                            <button className="btn btn-warning" onClick={() => this.props.history.goBack()}>Retour</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export { ExperiencePage } ;