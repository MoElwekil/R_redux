import React, {Component} from 'react'
import { connect } from 'react-redux'

class MoviesList extends Component {
    moviesList(){
        return this.props.movies.map((movie) => {
            return (
                <div>
                    <li className="list-group-item">
                        <h1>Movie Name: {movie.name}</h1>
                        <p>Reviews: {movie.stars}</p>
                    </li>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <ul className="list-group" style={{marginTop:40}}>
                    {this.moviesList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.movies);
    return state;
}

export default connect(mapStateToProps)(MoviesList)