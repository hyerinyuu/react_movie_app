import React from 'react';
import PropTypes from 'prop-types';
import './routes/Home.css';

const foodILike = [
    {
        id: 1,
        name:"kimchi",
        image:"kimchi image",
        rating: 5
    },
    {
        id: 2,
        name:"kimbap",
        image:"kimbap image",
        rating: 4.1
    },
    {
        id: 3,
        name:"samgyeopsal",
        image:"samgyeopsal image",
        rating: 4.9
    },
    {
        id: 4,
        name:"bibimbap",
        image:"bibimbap image",
        rating: 4.3
    },
];

// dish ==> App()에서 map()으로 복제한 foodILike 객체
function renderFood(dish){
    console.log(dish)
    return <Food key={dish.id} name={dish.name} images={dish.image} rating={dish.rating}/>
}

function Food({name, images, rating}){
    return (
        <div>
            <h1>I Like {name}</h1>
            <p>These are image of dishes →{images}</p>
            <p>Rating : {rating}</p>
        </div>
    )

}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App1() {
    return (
        <div>
            {/* 함수를 직접 넣는법
            { foodILike.map(dish => (*/}
                {/*<Food name={dish.name} images={dish.image} />*/}
            {/*))}*/}
            {/* 함수 불러오기 */}

            { foodILike.map(renderFood)}
        </div>
    );
}


export default App1;

