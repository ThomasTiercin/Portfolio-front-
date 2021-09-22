import React from 'react';
import { Link } from "react-router-dom";
import { professionalSkillService } from '../../_services';
class ProfessionalSkillPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            professionalSkills: []
        };
    }

    componentDidMount(e) {
        professionalSkillService.getAll().then(professionalSkills => this.setState({ professionalSkills }));
    }

    render() {
        const { professionalSkills } = this.state;
        let { i } = this.state;
        const content = professionalSkills.map((professionalSkill, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{professionalSkill.name}</td>
                <td>{professionalSkill.level}</td>
                <td><Link to={'/admin/editProfessionalSkill/'+professionalSkill.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deleteProfessionalSkill/'+professionalSkill.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
            </tr>
            )
        )
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Compétence professionnelle</h2>
                    </div>      
                    <div className="container">          
                        <div><Link to={'/admin/createProfessionalSkill'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
                        <div className="table-responsive">
                            <table className="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Niveau</th>
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
export { ProfessionalSkillPage } ;