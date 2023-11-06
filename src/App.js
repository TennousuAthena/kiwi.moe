import React, { useState } from 'react';
import './App.css';

function CheckStatusCode() {
  const [status, setStatus] = useState(null);

    fetch('https://hdtv.neu6.edu.cn/v1/icon_256x256.913607b31dc70ad6dc0b29a132c6ce40.svg')
      .then(response => {
        setStatus(response.status);
      })
      .catch(error => {
        console.error('请求失败:', error);
        setStatus(null);
      });

  return (
    <div>
      {status == null && (
        <p>❔Testing your network condition...</p>
      )}
      {status !== null && status == 200 && (
        <p>✅You can now access kiwi sites! <br />
          <a href='https://emby.kiwi.moe/' className='App-link'>🎬Emby</a> | <a href='https://drive.kiwi.moe/' className='App-link'>☁️Drive</a>
        </p>
      )}      
      {status !== null && status !== 200 && (
        <p>❌Your network does not support kiwi.</p>
      )}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='App-logo'>🥝</span>
        <p>
          Kiwi.moe is now here!
        </p>
        <CheckStatusCode />
      </header>
    </div>
  );
}

export default App;
