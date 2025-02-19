import '../styles/App.css';
import React from 'react';
import Main from './Main';
import Editor from "./Editor";
import Previewer from "./Previewer";



function App() {
  
  return (
    <div className='appContainer'>
       <Editor />
        <Previewer />
    </div>
   
  );
}

export default App;
