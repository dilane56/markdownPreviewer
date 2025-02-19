import '../styles/Main.css'
import React from 'react';


function Main() {
    const style = { opacity: 1 }
    const style1 = { backgroundColor: "rgb(44, 62, 80)" }
    return (
        <div className={"mainContainer"} >
            <textarea id={"editor"}></textarea>
            <div id={"preview"}></div>


        </div>
    );
}

export default Main;
