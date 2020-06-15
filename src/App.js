import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App(){
    return(
    /*
                [React의 path]
        react router는 기본적으로 url을 가져옴. 그다음 내 라우터에서 비교해 매치된다면 일치하는 component를 보여줌
        따라서 /about은 매치되는 component가 2개이므로 2개가 같이 나옴.(react가 '/' 역시 component로 인식하기 때문)
        ==> exact true를 추가해주면 url이 path와 정확히 일치할때만 나옴(이거 아니면 rendering 안함)
        
        Router는 HashRouter와 BrowserRouter가 있는데 HashRouter는 path 뒤에 #/이 따라옴 
        무슨 차이 인지는 따로 공부해야 알듯
         */
    <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
    </BrowserRouter>
    );
}

export default App;

