import '../styles/Previewer.css'
import {useState} from "react";
import Header from "./Header";


function Previewer() {


    return (
        <div className={"previewerContainer"}>
            <Header name={"Previewer"}/>
            <div id={"previewer"}></div>
        </div>
    )
}

export default Previewer;