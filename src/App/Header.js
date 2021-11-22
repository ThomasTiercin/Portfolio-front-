import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ""
        };
    }
    
    componentDidMount(e) {
        this.setState({ 
            role: JSON.parse(localStorage.getItem('username'))
        });
    }

    render(){
        const { role } = this.state;
        let admin = ""
        if (role=='admin') {
            admin =  
            (
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/dashboard">Tableau de bord</a></li>
            )
        }
        return (
            <header className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background" style={{position: 'absolute'}}>
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="/">Thomas TIERCIN</a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/productions">Réalisations</a></li>                
                                {admin}
                            </ul>
                            
                        </div>
                        </div>
                        
                    </nav>
                </div>
                <div className="clearfix"></div>
            </header>
        )
    }
}
export default Header