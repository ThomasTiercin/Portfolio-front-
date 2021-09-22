import React from 'react';
import { educationService } from '../../_services';

class EducationEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            education: {id:'',title:'',date:'', city:'', school:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        educationService.getEducationById(this.props.match.params.id).then(education => this.setState({ education }))        
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
        const { id, education } = this.state;
        this.setState({ submitted: true });
        educationService.updateEducation(id, education)
        .then(
            a => {
                this.props.history.push("/admin/educations");
            },
            error => this.setState({ error })
        )
    }

    render() {
        let { id, education } = this.state;
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Educations</h2>
                    </div>      
                    <div className="container">          
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" defaultValue={education.title} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Date :</label>
                            <input type="text" className="form-control" name="date" defaultValue={education.date} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Ville :</label>
                            <input type="text" className="form-control" name="city" defaultValue={education.city} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Ecole :</label>
                            <input type="text" className="form-control" name="school" defaultValue={education.school} onChange={this.handleChange} required="required"/>
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
export {EducationEdit}; 