//import image from '../assets/img/profile.jpg'
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <footer id="footer-copyright" className="footer-copyright">
                <div className="container">
                    <div className="hm-footer-copyright text-center">
                        <p>
                            &copy; copyright Thomas Tiercin.
                        </p>
                    </div>
                </div>

                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" ></i>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;