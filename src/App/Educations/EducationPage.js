import React from 'react';
import { Link } from "react-router-dom";
import { educationService } from '../../_services';
class EducationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            educations: []
        };
    }

    componentDidMount(e) {
        educationService.getAll().then(educations => this.setState({ educations }));
    }

    render() {
        const { educations } = this.state;
        let { i } = this.state;
        const content = educations.map((education, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{education.title}</td>
                <td>{education.date}</td>
                <td>{education.city}</td>
                <td>{education.school}</td>
                <td><Link to={'/admin/editEducation/'+education.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deleteEducation/'+education.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
            </tr>
            )
        )
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Educations</h2>
                    </div>      
                    <div className="container">          
                        <div><Link to={'/admin/createEducation'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
                        <div className="table-responsive">
                            <table className="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Ville</th>
                                        <th scope="col">Ecole</th>
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
export { EducationPage } ;