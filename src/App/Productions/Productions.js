import React from 'react';
import { Link } from "react-router-dom";
import { productionService } from '../../_services';
class Productions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productions: []
        };
    }

    componentDidMount() {
        productionService.getAll().then(productions => this.setState({ productions }));
    }

    render() {
        const { productions } = this.state;
        const content = productions.map((production, index) => 
            (
                <div className="col-sm-4" key={index}>
                    <div className="item">
                        <h2 style={{textAlign: 'center'}}>{production.title}</h2>
                        <img src={production.image} 
                                style={{width: '360px',height: '214px',objectFit: 'cover',objectPosition: 'top'}} alt="production image"/>
                        <div className="isotope-overlay">
                            <Link to={'/production/'+production.id}>
                                {production.title}
                            </Link>
                        </div>
                    </div>
                </div>
            )
        )
        return (
            <section id="production" className="portfolio">
				<div className="portfolio-details"><br/><br/><br/><br/><br/><br/>
					<div className="section-heading text-center">
						<h2>Mes réalisations</h2>
					</div>
					<div className="container">
						<div className="portfolio-content">
							<div className="isotope">
                                {content}
							</div>
						</div>
					</div>
				</div>
			</section>
        );
    }
}
export { Productions } ;