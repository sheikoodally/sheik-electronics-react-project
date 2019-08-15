import React, { Component } from 'react';
import './css/Footer.css';

export class Footer extends Component {

    render() {

        return (
            <footer>
                <div className="cent">
                <div className="icons">
                   <a href="https://www.linkedin.com/in/sheik-oodally/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://github.com/sheikoodally/sheik-electronics-react-project" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
