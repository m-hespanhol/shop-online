import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'John',
      cartCount: 7
    };
  }

  handleClick = (name) => {
    console.log('Clicked again');
    //this.state.userName = 'Mary'; - WRONG
    this.setState({
      userName: name
    });
  }

  handleIncreaseClick = () => {
    const count = this.state.cartCount + 1;
    this.setState({
      cartCount: count
    });
  }

  handleDecreaseClick = () => {
    const count = this.state.cartCount - 1;
    if (count >= 0) {
      this.setState({
        cartCount: count
      });
    }
  }

  render() {
    return (
      <div className='format-name'>
        <Header
          userName={this.state.userName}
          cartCount={this.state.cartCount}
        />

        <button
          onClick={() => this.handleClick('Mary')}
        >Change to Mary</button>

        <button
          onClick={() => this.handleClick('John')}
        >Change to John</button>

        <button
          onClick={this.handleIncreaseClick}
        >Increase</button>

        <button
          onClick={this.handleDecreaseClick}
        >Decrease</button>

        <Products
          userName={this.state.userName}
        />

        <Footer
          cartCount={this.state.cartCount}
        />
      </div>
    );
  }
}

export default App;
