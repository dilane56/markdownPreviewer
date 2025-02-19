import {useState} from "react";
import '../styles/Header.css'

function Header(props) {
    const [buttonActive, setButtonActive] = useState(false)
    function toggleActive() {
        setButtonActive(!buttonActive)
    }
    return (
        <div className={"header"}>
            <p>{props.name}</p>
            {buttonActive ? <img width="28" height="28"
                                 src="https://img.icons8.com/external-febrian-hidayat-basic-outline-febrian-hidayat/48/external-resize-user-interface-febrian-hidayat-basic-outline-febrian-hidayat.png"
                                 alt="external-resize-user-interface-febrian-hidayat-basic-outline-febrian-hidayat"
                                 onClick={toggleActive}/> :
                <img width="28" height="28"
                     src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/external-expand-arrow-kmg-design-glyph-kmg-design.png"
                     alt="external-expand-arrow-kmg-design-glyph-kmg-design" onClick={toggleActive}/>}


        </div>
    )
}

export default Header