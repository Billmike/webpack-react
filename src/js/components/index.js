import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.scss';

const SimpleApp = () => {
  return (
    <div>
      <h1 className='hello'>
        {`This app is running in ${
          process.env.NODE_ENV === 'development' ? 'development' : 'production'
        }`}
      </h1>
    </div>
  );
};

export default SimpleApp;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<SimpleApp />, wrapper) : false;
