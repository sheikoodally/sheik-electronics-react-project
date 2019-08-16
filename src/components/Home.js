import React, { Component } from 'react';
import './css/Home.css';

export class Home extends Component {

    render() {
        
        return (

            <div className="home">


                <section className="homeSec">
                    {this.props.items.phones.slice(0,3).map(phones =>{
                    return <div key = {phones.id} className="alignCenter">
                            <h3 id="brand"> {phones.brand}</h3>
                            <h4 id="model"> {phones.model}</h4>
                            </div>        
                    })}
                </section>

            </div>

        )
    }
}

export default Home;