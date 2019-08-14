import React, { Component } from 'react';
import './css/Header.css';

export class Header extends Component {

    state={
        showNav: true,
    }

    render() {
        return (
            <div>
                <nav>
                  <div className="logo">
                    <h4>Sheik Electronics</h4>
                  </div>
                  <ul className={this.state.showNav ? "navlinks navlinks_show" : "navlinks hide"}>
                      <li><a href="#">Home</a></li>    
                      <li><a href="#">Electronics</a></li>    
                      <li><a href="#">Phones</a></li>    
                      <li><a href="#">Laptops</a></li>    
                      <li><a href="#">Login</a></li>    
                  </ul> 
                    <div className="burger" onClick = {() => this.setState({showNav: !this.state.showNav})} >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
              <script src="HeadNav.js"></script>
            </div>
        )
    }
}

export default Header;
