import React from 'react';
import WrappedListComponent from './components/WrappedListComponent';

const App = () => {
  const items = [{ text: 'hello' }];
  return (
    <div>
      <WrappedListComponent items={items} />
    </div>
  );
};

export default App;
