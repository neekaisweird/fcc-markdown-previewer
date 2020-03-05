import React from 'react';
import marked from 'marked';

const Previewer = ({ text }) => {
  return (
    <div className="Previewer">
      <h1>Previewer</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  );
};

export default Previewer;
