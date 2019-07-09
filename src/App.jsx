import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Input, Button, Row, Col, message, List,
} from 'antd';
import ItemCard from './components/ItemCard';

const { Item } = List;
const App = () => {
  const [todoItems, setToItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    const found = todoItems.includes(inputValue);
    if (found) {
      message.error(`${inputValue} already exist`);
    } else {
      setToItems([...todoItems, inputValue]);
    }
    setInputValue('');
  };

  return (
    <div className="App" style={{ margin: '16px' }}>
      <h1>To Do List</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Input value={inputValue} onChange={onInputChange} placeholder="Enter to-do task" />
        </Col>
        <Col span={8}>
          <Button type="primary" onClick={addItem}>
            Add
          </Button>
        </Col>
      </Row>
      <List>
        {todoItems.map(v => (
          <Item key={v} style={{ border: 0 }}>
            <ItemCard item={v} />
          </Item>
        ))}
      </List>
      <h1>Completed</h1>
    </div>
  );
};

export default App;
