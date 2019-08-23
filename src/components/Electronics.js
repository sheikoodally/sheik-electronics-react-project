import React, { Component } from 'react';
import './css/Home.css';
import ShoppingItems from '../data/ShoppingItems';


export class Electronics extends Component {

    render() {

        const shopItems = ShoppingItems;

        this.state = { 
            shopItems
        }

        return (

            <div className="home">


                <section className="homeSec">
                    {this.state.shopItems.electronics.map(electronics =>{
                    return <div key = {electronics.id} className="colorPattern">
                            <h3 id="brand"> {electronics.brand}</h3>
                            <h4 id="model"> {electronics.model}</h4>
                            <table>
                            <tr><p className="Phoneprice">Price: {electronics.price}$</p></tr>
                            <tr><p>Description: {electronics.description}</p></tr> 
                            </table>
                            </div>        
                    })}
                </section>
            </div>

        )
    }
}

export default Electronics;