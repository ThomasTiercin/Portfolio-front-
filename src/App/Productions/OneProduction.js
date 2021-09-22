import React from 'react';
import { Redirect } from "react-router-dom";
import { productionService } from '../../_services';
class OneProduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            production: {id:'',title:'',date:'', description:'', image:'', link:''}
        };
    }

    componentDidMount(e) {
        productionService.getProductionById(this.state.id).then(production => this.setState({ production }));
    }

    render() {
        const { production } = this.state;
        return (
            <section id="portfolio" className="portfolio">
				<div className="portfolio-details"><br/><br/><br/><br/><br/><br/>
					<div className="section-heading text-center">
						<h2>{production.title}</h2>
					</div>
					<div className="container">
						<div className="portfolio-content">
							<div className="isotope">
                                <div className="col-sm-6">
                                    <img src={production.image} />
                                </div>
                                <div className="col-sm-6">
                                    <h2>Création : {production.date}</h2><br/>
                                    <p style={{whiteSpace: 'pre-line'}}>{production.description}</p><br/>
                                    <center><a href={production.link}>{production.link}</a></center>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</section>
        );
    }
}
export { OneProduction } ;