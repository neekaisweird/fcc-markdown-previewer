import React, { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

const App = () => {
  const [text, setText] = useState('# Welcome to my Markdown Previewer!');
  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <Editor updateText={handleChange} text={text} />
      <Previewer text={text} />
    </div>
  );
};

export default App;
