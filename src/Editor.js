import React from 'react';
import './Editor.css';

const Editor = ({ text, updateText }) => {
  return (
    <div className="Editor">
      <h1 className="title">
        <label htmlFor="editor">Editor</label>
      </h1>
      <textarea
        onChange={updateText}
        value={text}
        id="editor"
        rows="15"
        columns="35"
      ></textarea>
    </div>
  );
};

export default Editor;
