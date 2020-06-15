import React from 'react';
import axios from 'axios';
import Movie from "./components/Movie";
import "./App.css";


// React의 class는 함수가 아니기 때문에 return이 없음
// react엔진은 자동으로 class component의 rendermethod를 실행함
class App extends React.Component {

    state = {
        isLoading: true,
        movies : []
    };

    /*
        1. axios는 항상 빠르지 않기 때문에 javascript에게 componentDidMount가
         끝날때까지 약간 시간이 걸릴 수 있다고 알려줘야함

        2. async와 await를 추가함
               asnyc : 비동기 함수(== 너는 이걸 기다려야해)
               await : (내가 뭘 기다려야해? -> axios) axios가 끝날때까지 기다렸다가 계속함.
               (axios.get은 완료되기까지 시간이 좀 필요하기 때문에 사용)
    */
    getMovies = async () => {
        // movie.json을 살펴보면 movielist데이터가 data.data.movie에 들어있음
        // movies를 선언하고 movies.data.data.movie 식으로 데이터를 가져올 수도 있지만
        // es6문법에서는 이런식으로 데이터를 바로 가지고 올 수 있다
        const { data : {data : {movies}}} =  await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        console.log('영화리스트 : ', movies);

        // 첫번째 movies : state의 movie
        // 두번째 movies : axios로부터 가져온 movies
        // this.setState({movies : movies})
        // 이걸 그냥 단축해서 아래와 같이 쓸 수 있음
        // this.setState({ movies })

        // isLoading값도 false로 바꿔줌
        this.setState({ movies, isLoading : false });



    }
    /* componentDidMount 앞에 async를 넣어줌 */
    componentDidMount(){

        console.log("did mount")
        this.getMovies();

    }

    render(){
        console.log("rendered")
        {/* */}
        const { isLoading, movies } = this.state;

        return <div>
            { /*
                ES6 이전 문법
                state값을 직접 받아옴
                {this.state.isLoading ? "Loading" : "wd are ready"}

                {isLoading ? "Loading..." : "we are ready"}
            */ }

            { /* data rendering #### const로 선언해놓은 state값 가져오는 파라메터에 movies 추가하는거 잊지 않기 */}
            <section className="container"></section>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">

                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>

            )}
        </div>
    }

}

export default App;


