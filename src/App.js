import React from 'react';
import List from './List';
import ItemForm from './ItemForm';
import './App.css';

class App extends React.Component {
  state = {
    grocery_items: [
      { id: 1, name: "Eggs", complete: true },
      { id: 2, name: "Cheese", complete: false },
      { id: 3, name: "Bread", complete: false }
    ]
  };

  addItem = (name) => {
    const { grocery_items } = this.state;
    const grocery_item = {name, id: this.state.grocery_items.length+1, complete: false};
    this.setState({ grocery_items: [grocery_item, ...grocery_items]});
  }

  handleClick = (id) => {
    const {grocery_items} = this.state;
    this.setState({
      grocery_items: grocery_items.map( grocery_item => {
        if (grocery_item.id === id) {
          return {...grocery_item, complete: !grocery_item.complete};
        }
        return grocery_item;
      })
    })
  }

  render() {

  const { grocery_items } = this.state;

  return (
    <div>
      <ItemForm addItem={this.addItem} />
      <List name="Grocery List" items={grocery_items} itemClick={this.handleClick}/>
    </div>
  )
  }
}

export default App;
