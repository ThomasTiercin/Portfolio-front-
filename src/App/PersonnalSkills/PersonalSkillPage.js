import React from 'react';
import { Link } from "react-router-dom";
import { personalSkillService } from '../../_services';
class PersonalSkillPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            personalSkills: []
        };
    }

    componentDidMount(e) {
        personalSkillService.getAll().then(personalSkills => this.setState({ personalSkills }));
    }

    render() {
        const { personalSkills } = this.state;
        let { i } = this.state;
        const content = personalSkills.map((personalSkill, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{personalSkill.name}</td>
                <td>{personalSkill.level}</td>
                <td><Link to={'/admin/editPersonalSkill/'+personalSkill.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deletePersonalSkill/'+personalSkill.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
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
                        <div><Link to={'/admin/createPersonalSkill'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
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
export { PersonalSkillPage } ;