import React from 'react';
import { certificationService } from '../../_services';

class CertificationEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            certification: {id:'',title:'',subtitle:'', detail:''},
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        certificationService.getCertificationById(this.props.match.params.id).then(certification => this.setState({ certification }))        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.certification,
            certification: { ...this.state.certification, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id, certification } = this.state;
        this.setState({ submitted: true });
        certificationService.updateCertification(id, certification)
        .then(
            a => {
                this.props.history.push("/admin/certifications");
            },
            error => this.setState({ error })
        )
    }

    render() {
        let { id, certification } = this.state;
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Certifications</h2>
                    </div>      
                    <div className="container">          
                    <form  onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className='form-group'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" defaultValue={certification.title} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Sous-titre :</label>
                            <input type="text" className="form-control" name="subtitle" defaultValue={certification.subtitle} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Detail :</label>
                            <input type="text" className="form-control" name="detail" defaultValue={certification.detail} onChange={this.handleChange} required="required"/>
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
export {CertificationEdit}; 