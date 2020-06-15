import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    /*
                React에서 아래와 같은 href tag를 사용하지 않는 이유
             html은 기본적으로 page를 모두 새로 reload(== 페이지를 강제로 새로고침하고 리액트 component를 죽임) 시키기 때문에 react의 철학과 전혀 맞지 않음.
             게다가 rootPath도 없어서 /about으로 가면 그냥 localhost:8080/about으로 가기 때문에 그런 페이지는 안나옴(우리가 원하는 path가 아님)
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
        
        따라서 Link를 import해서 사용하면 됨
        (Link는 Router밖에서는 작동 안됨 항상 Router 안에서만 사용 가능)
        */
    return(
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    )
}

export default Navigation;