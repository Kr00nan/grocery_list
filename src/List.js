import React from 'react';
import ListItem from './ListItem';

const List = ({ items, name, itemClick}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {items.map(item => <ListItem key={item.id} {...item} itemClick={itemClick} />)}
    </ul>
  </div>
)

export default List;