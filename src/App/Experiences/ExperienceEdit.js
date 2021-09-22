import React from 'react';
import { experienceService } from '../../_services';

class ExperienceEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            experience: {id:'',title:'',subtitle:'',city:'',date:'',detail:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        experienceService.getExperienceById(this.props.match.params.id).then(experience => this.setState({ experience }))        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.experience,
            experience: { ...this.state.experience, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id, experience } = this.state;
        this.setState({ submitted: true });
        experienceService.updateExperience(id, experience)
        .then(
            a => {
                this.props.history.push("/admin/experiences");
            },
            error => this.setState({ error })
        )
    }

    render() {
        let { id, experience } = this.state;
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Experiences</h2>
                    </div>      
                    <div className="container">          
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" defaultValue={experience.title} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Sous-titre :</label>
                            <input type="text" className="form-control" name="subtitle" defaultValue={experience.subtitle} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Ville :</label>
                            <input type="text" className="form-control" name="city" defaultValue={experience.city} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Date :</label>
                            <input type="text" className="form-control" name="date" defaultValue={experience.date} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Detail :</label>
                            <textarea type="text" className="form-control"  name="detail" defaultValue={experience.detail} onChange={this.handleChange} required="required"/>
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
export {ExperienceEdit}; 