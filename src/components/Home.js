import React, { Component } from 'react';
import phone1 from '../shoppingimg/phone/phone1.jpg'
import phone2 from '../shoppingimg/phone/phone2.jpg'
import phone3 from '../shoppingimg/phone/phone3.jpg'
import './css/Home.css';

export class Home extends Component {

    render() {     
        return (

            <div className="home">


                <section className="homeSec">
                    {this.props.items.phones.slice(0,3).map(phones =>{
                    return <div key = {phones.id} className="colorPattern">
                            <h3 id="brand"> {phones.brand}</h3>
                            <h4 id="model"> {phones.model}</h4>
                            <table>
                            <tr><p className="Phoneprice">Price: {phones.price}$</p></tr>
                            <tr><p>Camera: {phones.camera}</p></tr> 
                            <tr><p>Battery capacity: {phones.battery}</p></tr>
                            </table>
                            </div>        
                    })}
                </section>
            </div>

        )
    }
}

export default Home;