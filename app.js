

// http://www.omdbapi.com/?i=tt3896198&apikey=d9040479

class App extends React.Component {
    state = {
        baseUrl: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=d9040479',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
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
            .then(movies => console.log(movies))
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
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))