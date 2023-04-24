import React from "react";
import "../assets/style.css"
import img from "../assets/img/img1.jpg"

function Post(props) {
    return (
        <div className="post">
            <div className="inforposter">
                <img className="avatarposter" src={props.img}></img>
                <p className="nameposter">{props.name}</p>
                <div className="circle"></div>
                <div className="timeposter">{props.time}</div>
            </div>
            <p className="caption">{props.caption}</p>
            <div className="mainpost">
                <img src={props.img}></img>
            </div>
            <div className="connectpost">
                <i className="material-symbols-outlined">favorite</i>
                <p>1{props.like}</p>
                <i className="material-symbols-outlined">mode_comment</i>
                <p>{props.cmt}</p>
                {/* <i class="material-symbols-outlined">bookmark_add</i>
                <p>Luu</p> */}
            </div>
            {props.maincmt?.map((item) => 
                    <div className="cmtpost">
                        <img className="avatarposter" src={item.imgcmt}></img>
                        <div className="cmtdetail">
                            <h4>{item.namecmt}</h4>
                            <p>{item.detail}</p>
                        </div>
                    </div> 
            )}
        </div>
    )
}

export default Post