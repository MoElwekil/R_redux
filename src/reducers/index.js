import { combineReducers } from "redux"

const moviesListReducer = () => {
    return [
        {name: 'Wormwood', stars: '4.5'},
        {name: 'Lady Macbeth', stars: '4.8'},
        {name: 'Dunkirk', stars: '2.9'},
        {name: 'Okja', stars: '4.2'},
    ]
}

const selectedMovieReducer = (selectMovie=null, action) => {
    if(action.type === 'SELECT_MOVIE'){
        return action.movie
    }

    return selectMovie
}

export default combineReducers({
    movies: moviesListReducer,
    selectedMovie: selectedMovieReducer
})