import '../styles/Editor.css'
import {useState} from "react";
import Header from "./Header";
function Editor(){
    // const [buttonActive, setButtonActive] = useState(false)
    // function toggleActive() {
    //     setButtonActive(!buttonActive)
    // }
    return (
        <div className={"editorContainer"}>
            <Header name={"Editor"}/>
            <textarea id={"editor"}></textarea>
        </div>
    )
}

export default Editor;