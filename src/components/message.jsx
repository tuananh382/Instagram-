import React from "react";
import Header from "./header";
import "../assets/style.css"

function Message () {
    return (
        <div className="message">
            <Header active="message"/>
            <div className="container_mess">
                <div className="listmess">
                    <p>Huynh Tuan Anh</p>
                </div>
                <div className="mainmess">

                </div>
            </div>
        </div>
    )  
}

export default Message