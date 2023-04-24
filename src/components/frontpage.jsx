import React from "react";
import Header from "./header";
import Post from "./post";
import posts from "../data.json"
import img from "../assets/img/img1.jpg"
function Frontpage() {
    return (
        <div className="frontpage">
            <Header active="frontpage" />
            <div className="posts">
                {posts.map(item => <Post name={item.name}
                    img={item.img}
                    like={item.like}
                    time={item.time}
                    cmt={item.cmt}
                    caption={item.caption}
                    maincmt={item.maincmt} />)}

            </div>
            <div className="myinfor">
                <div className="myinfor_infor">
                    <img src={img}></img>
                    <p>Huynh Tuan Anh</p>
                    <a>Dang Xuat</a>
                </div>
                <p>Nhung nguoi ban dang theo doi:</p>
                <div className="myinfor_frs">
                    <div className="myinfor_fr">
                        <img src={img}></img>
                        <p>Yauso</p>
                        <a>Huy theo doi</a>
                    </div>
                    <div className="myinfor_fr">
                        <img src={img}></img>
                        <p>Riven</p>
                        <a>Huy theo doi</a>
                    </div>
                    <div className="myinfor_fr">
                        <img src={img}></img>
                        <p>Yone</p>
                        <a>Huy theo doi</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Frontpage