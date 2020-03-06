import React from 'react';
import marked from 'marked';
import './Previewer.css';

marked.setOptions({
  breaks: true
});

const Previewer = ({ text }) => {
  return (
    <div className="Previewer">
      <h1 className="title">Previewer</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  );
};

export default Previewer;
