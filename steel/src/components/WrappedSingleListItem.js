import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = React.memo(
  ({ index, isSelected, onClickHandler, text }) => {
    return (
      <li
        style={{ backgroundColor: isSelected ? 'green' : 'red' }}
        onClick={onClickHandler(index)}
      >
        {text}
      </li>
    );
  }
);

export default WrappedSingleListItem;

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
