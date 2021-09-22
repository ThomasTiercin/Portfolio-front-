import React from 'react';
import { personalSkillService } from '../../_services';

class PersonalSkillEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            personalSkill: {id:'',name:'', level:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        personalSkillService.getPersonalSkillById(this.props.match.params.id).then(personalSkill => this.setState({ personalSkill }))        
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
        const { id, personalSkill } = this.state;
        this.setState({ submitted: true });
        personalSkillService.updatePersonalSkill(id, personalSkill)
        .then(
            a => {
                this.props.history.push("/admin/personalSkills");
            },
            error => this.setState({ error })
        )
    }

    render() {
        let { id, personalSkill } = this.state;
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
                            <input type="text" className="form-control" name="name" defaultValue={personalSkill.name} onChange={this.handleChange} required="required"/>
                            <label htmlFor="name">Niveau :</label>
                            <input type="text" className="form-control" name="level" defaultValue={personalSkill.level} onChange={this.handleChange} required="required"/>
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
export {PersonalSkillEdit}; 