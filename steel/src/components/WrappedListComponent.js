import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WrappedSingleListItem from './WrappedSingleListItem';

const WrappedListComponent = React.memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState('');

  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <WrappedSingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
  );
});

// WrappedListComponent.propTypes = {
//   items: PropTypes.array(
//     PropTypes.shapeOf({
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

WrappedListComponent.defaultProps = {
  items: null,
};

export default WrappedListComponent;
