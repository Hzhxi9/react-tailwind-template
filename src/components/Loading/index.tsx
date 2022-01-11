import React from 'react';

import './index.css'

const Loading = () => {
  return (
    <div className="loading-container">
        <div className="loadingio-spinner-ellipsis-3xvo7g9jvw">
        <div className="ldio-gn1si90cwto">
          {new  Array(5).fill('').map((_, key) => <div key={key}></div>)}
        </div>
      </div>
    </div>
  );
};

export default Loading;
