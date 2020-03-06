import React, { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
const DEFAULT_TEXT = `# Welcome to the Markdown Previewer! 

## This is a sub-heading 

There's links--> [FreeCodeCamp](https://www.freecodecamp.com)

And inline code! \`<h1>I like cats</h1>\`

\`\`\`
// code block!

function example(value){
  return value.toUpperCase();
}
\`\`\`

You can **bold** or _italicize_ anything you want ~~or not~~

> Block Quotes

- There's even images 
  - here's a dog!



![Dog](https://i.picsum.photos/id/237/200/200.jpg)
`;
const App = () => {
  const [text, setText] = useState(DEFAULT_TEXT);
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
