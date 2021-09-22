import React from 'react';
import { professionalSkillService } from '../../_services';

class ProfessionalSkillEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            professionalSkill: {id:'',name:'', level:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        professionalSkillService.getProfessionalSkillById(this.props.match.params.id).then(professionalSkill => this.setState({ professionalSkill }))        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.professionalSkill,
            professionalSkill: { ...this.state.professionalSkill, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id, professionalSkill } = this.state;
        this.setState({ submitted: true });
        professionalSkillService.updateProfessionalSkill(id, professionalSkill)
        .then(
            a => {
                this.props.history.push("/admin/professionalSkills");
            },
            error => this.setState({ error })
        )
    }

    render() {
        let { id, professionalSkill } = this.state;
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Compétence Professionnelle</h2>
                    </div>      
                    <div className="container">          
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Nom :</label>
                            <input type="text" className="form-control" name="name" defaultValue={professionalSkill.name} onChange={this.handleChange} required="required"/>
                            <label htmlFor="name">Niveau :</label>
                            <input type="text" className="form-control" name="level" defaultValue={professionalSkill.level} onChange={this.handleChange} required="required"/>
                        </div>
                        <button type="submit" className="btn btn-success">Modifier</button>
                        
                    </form>
                    <button className="btn btn-warning" onClick={() => this.props.history.goBack()}>Retour</button>
                    
                    </div>
                </div>
            </section>
            
        );
    }
}
export {ProfessionalSkillEdit}; 