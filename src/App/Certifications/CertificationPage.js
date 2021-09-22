import React from 'react';
import { Link } from "react-router-dom";
import { certificationService } from '../../_services';
class CertificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            certifications: []
        };
    }

    componentDidMount(e) {
        certificationService.getAll().then(certifications => this.setState({ certifications }));
    }

    render() {
        const { certifications } = this.state;
        let { i } = this.state;
        const content = certifications.map((certification, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{certification.title}</td>
                <td>{certification.subtitle}</td>
                <td>{certification.detail}</td>
                <td><Link to={'/admin/editCertification/'+certification.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deleteCertification/'+certification.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
            </tr>
            )
        )
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Certifications</h2>
                    </div>      
                    <div className="container">          
                        <div><Link to={'/admin/createCertification'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
                        <div className="table-responsive">
                            <table className="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Sous-titre</th>
                                        <th scope="col">Detail</th>
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
export { CertificationPage } ;