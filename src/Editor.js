import React from 'react';

const Editor = ({ text, updateText }) => {
  return (
    <div className="Editor">
      <label htmlFor="editor">Editor</label>
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
