import React from 'react';
import { experienceService } from '../../_services';

class ExperienceCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            experience: {name:'', description:'', city:'', date:'', detail:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
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
        const { experience } = this.state;
        
        this.setState({ submitted: true });
        experienceService.createExperience(experience)
        .then(
            a => {
                this.props.history.push("/admin/experiences");
            },
            error => this.setState({ error })
        )
    }

    render() {
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Ajouter une Experience</h2>
                    </div>      
                    <div className="container">   
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Sous-titre :</label>
                            <input type="text" className="form-control" name="subtitle" onChange={this.handleChange}/>
                            <label htmlFor="description">Ville :</label>
                            <input type="text" className="form-control" name="city" onChange={this.handleChange} />
                            <label htmlFor="description">Date :</label>
                            <input type="text" className="form-control" name="date" onChange={this.handleChange} />
                            <label htmlFor="description">Détail :</label>
                            <textarea type="text" className="form-control" name="detail" onChange={this.handleChange} />
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
export {ExperienceCreate}; 