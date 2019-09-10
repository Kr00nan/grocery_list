import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    grocery_items: [
      { id: 1, name: "Eggs", complete: true },
      { id: 2, name: "Cheese", complete: false },
      { id: 3, name: "Bread", complete: false }
    ]
  };

  renderListItems = () => {
    const {grocery_items} = this.state;
    return grocery_items.map(
      item => <li key={item.id}>{item.name}</li>
    )
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderListItems()}
        </ul>
      </div>
    );
  }
}

export default App;
