

// http://www.omdbapi.com/?i=tt3896198&apikey=d9040479

class App extends React.Component {
    state = {
        baseUrl: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=d9040479',
        query: '&t=',
        movieTitle: '',
        searchURL: '',
        movie: null
    }

    handleChange = (e) => {
        this.setState({
            movieTitle: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            searchURL: `${this.state.baseUrl}${this.state.apiKey}${this.state.query}${this.state.movieTitle}`
        }, () => {
            fetch(this.state.searchURL)
            .then( response => response.json())
            .then(movie => {
                this.setState({
                    movie: movie // set movie in the state
                })
                // console.log(this.state.movie)
            })
            .catch(error => console.error(error))
        })
    }

    render() {
        return(
            <div>
                <h1>Mini Movie App</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="movieTitle">Movie Title</label>
                    <input type="text" id="movieTitle" value={this.state.movieTitle} onChange={this.handleChange}></input>

                    <input type="submit"></input>

                </form>


                { this.state.movie && <MovieInfo movie={this.state.movie}/>}
            </div>
        )
    }
}

const MovieInfo = (props) => {
    return (
        <div>
            <h1>Movie title: {props.movie.Title}</h1>
            <h2>Year: {props.movie.Year}</h2>
            <img src={props.movie.Poster}/>
            <h3>Genre: {props.movie.Genre}</h3>
            <p>Plot: {props.movie.Plot}</p>
        </div>
    )
}

// class MovieInfo extends React.Component {
//     render(){
//         return(
//             // <div>
//             //     {this.props.state.map(movie => {
                    
//             //     })}
//             // </div>
//             <div key ={this.state.movie}>
//                     <h1>{this.state.movie}</h1>
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'))