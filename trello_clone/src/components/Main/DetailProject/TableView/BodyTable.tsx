import React from 'react';
import Head from './Head';
import Item from './Item';

const BodyTable = () => {
  return (
    <div className="bang">
      <Head />
      <div className="content">
        <Item />
      </div>
    </div>
  );
};

export default BodyTable;
