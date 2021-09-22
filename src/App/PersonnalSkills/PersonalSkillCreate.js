import React from 'react';
import { personalSkillService } from '../../_services';

class PersonalSkillCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            personalSkill: {name:'', level:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.personalSkill,
            personalSkill: { ...this.state.personalSkill, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { personalSkill } = this.state;
        this.setState({ submitted: true });
        personalSkillService.createPersonalSkill(personalSkill)
        .then(
            a => {
                this.props.history.push("/admin/personalSkills");
            },
            error => this.setState({ error })
        )
    }

    render() {
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Ajouter une compétence professionnelle</h2>
                    </div>      
                    <div className="container">   
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Nom :</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} required="required"/>
                            <label htmlFor="name">Niveau :</label>
                            <input type="text" className="form-control" name="level" onChange={this.handleChange} required="required"/>
                        </div>
                        <button type="submit" className="btn btn-success">Créer</button>
                        
                    </form>
                    <button className="btn btn-warning" onClick={() => this.props.history.goBack()}>Retour</button>
                    </div>
                </div>
            </section>
           
        );
    }
}
export {PersonalSkillCreate}; 