import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css";

// component가 state값이 필요하지 않을 경우
// 함수형으로 선언하면 됨

function Movie( {id, year, title, summary, poster, genres}) {
   return <div className="movie">
       <img src={poster} alt={title} title={title} />
       <div className="movie_data">
           <h3 className="movie_title">{title}</h3>
           { /*  내가 장르 추가한거 :
             <small className="movie_genre">{genres}</small>
             장르는 array이므로

             2. map에 있는 각각의 item은 key가 필요함(없으면 에러남)
             그래서 map의 argument인 currentItem, index를 사용할것임
             (argument가 2개 이상인 경우에는 괄호로 묶어주기!)
           */ }
           <ul className="genres">
               {genres.map( (genre, index) => (<li key={index} className="genres_genre">{genre}</li>
               ))}
           </ul>
           <h5 className="movie_year">{year}</h5>
           <p className="movie_summary">{summary.slice(0 , 200)}...</p>
       </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // 내가 genres만 prop에 끼워본것 : genres: PropTypes.string.isRequired
    // 노마드코더가 끼운방법 :
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;