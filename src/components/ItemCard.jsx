import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ItemCard = (props) => {
  const { item } = props;
  return (
    <div style={{ width: '100%' }}>
      <Card>{item}</Card>
    </div>
  );
};

ItemCard.defaultProps = { item: '' };

ItemCard.propTypes = {
  item: PropTypes.string,
};

export default ItemCard;
