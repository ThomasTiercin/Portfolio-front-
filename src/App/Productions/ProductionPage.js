import React from 'react';
import { Link } from "react-router-dom";
import { productionService } from '../../_services';
class ProductionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            productions: []
        };
    }

    componentDidMount(e) {
        productionService.getAll().then(productions => this.setState({ productions }));
    }

    render() {
        const { productions } = this.state;
        let { i } = this.state;
        const content = productions.map((production, index) => 
            (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{production.title}</td>
                <td>{production.date}</td>
                <td>{production.description}</td>
                <td>{production.image}</td>
                <td>{production.link}</td>
                <td><Link to={'/admin/editProduction/'+production.id} style={{color: "#212529"}}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={'/admin/deleteProduction/'+production.id} style={{color: "#212529"}}><i className="fa fa-trash"></i></Link></td>
            </tr>
            )
        )
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Productions</h2>
                    </div>      
                    <div className="container">          
                        <div><Link to={'/admin/createProduction'} style={{color: "#212529"}}><i className="fa fa-plus"></i></Link></div>
                        <div className="table-responsive">
                            <table className="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Lien</th>
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
export { ProductionPage } ;