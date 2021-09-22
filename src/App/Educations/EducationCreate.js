import React from 'react';
import { educationService } from '../../_services';

class EducationCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            education: {title:'', date:'', city:'', school:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.education,
            education: { ...this.state.education, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { education } = this.state;
        this.setState({ submitted: true });
        educationService.createEducation(education)
        .then(
            a => {
                this.props.history.push("/admin/educations");
            },
            error => this.setState({ error })
        )
    }

    render() {
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Ajouter une Education</h2>
                    </div>      
                    <div className="container">   
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Date :</label>
                            <input type="text" className="form-control" name="date" onChange={this.handleChange}/>
                            <label htmlFor="description">Ville :</label>
                            <input type="text" className="form-control" name="city" onChange={this.handleChange} />
                            <label htmlFor="description">Ecole :</label>
                            <input type="text" className="form-control" name="school" onChange={this.handleChange} />
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
export {EducationCreate}; 