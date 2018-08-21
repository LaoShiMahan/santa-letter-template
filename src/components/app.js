import React, { Component } from 'react';
import Header from './header';
import Input from './input';
import Content from './content';
import Wishlist from './wishlist';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Wishlist />
        <Content />
      </div>
    );
  }
}
