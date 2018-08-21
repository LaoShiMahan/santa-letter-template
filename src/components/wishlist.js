import React, { Component } from 'react';
import Input from './input';
import Content from './content';

class Wishlist extends Component {
    constructor() {
        super()
        this.state = {
            wishOne: '',
            wishTwo: 'ball',
            wishThree: 'bike',
            wishFour: 'game',
            name: 'Brodie'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ wishOne: event.target.value })
    }

    render() {
        return (   
            <div>
                {
                    Input(this.handleInputChange)
                }
                {
                    // Content(this.state.wishOne)
                    console.log(this.state.wishOne)
                }         
            </div>
        )
    }
}

export default Wishlist;