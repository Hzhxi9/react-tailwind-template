import React from 'react';

import './index.css'

const Loading = () => {
  return (
    <div className="loading-container">
        <div className="loadingio-spinner-ellipsis-jqnjs6sqb6g">
        <div className="ldio-fcbrehx41xn">
          {new  Array(5).fill('').map((_, key) => <div key={key}></div>)}
        </div>
      </div>
    </div>
  );
};

export default Loading;
